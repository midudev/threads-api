import { ENDPOINTS_DOCUMENT_ID, THREADS_APP_ID, GRAPHQL_ENDPOINT } from './consts';
import { IS_DEBUG } from './env';
import { ThreadsUserProfileResponse } from '../types/threads-api'
import { mapUserProfile } from './map'

const fetchBase = ({ documentId, variables }) => {
  return fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': 'Threads API midu client',
      'x-ig-app-id': THREADS_APP_ID,
      "x-fb-lsd": "oPTVCVmtkN9KqeSBWfaAK6",
    },
    body: `variables=${JSON.stringify(variables)}&doc_id=${documentId}&doc_id=23996318473300828&lsd=oPTVCVmtkN9KqeSBWfaAK6`
    })
  .then(response => response.json())
}

export const fetchUserIdByName = ({ userName }) => {
  if (IS_DEBUG) console.info(`https://www.threads.net/@${userName}`)

  return fetch(`https://www.threads.net/@${userName}`, {
      headers: { 'sec-fetch-site': 'same-site' }
  })
    .then(res => res.text())
    .then(html => {
      const regex = /{"user_id":"(\d+)"}/g
      const [[, userId]] = html.matchAll(regex) ?? []
      return userId
    })
}

export const fetchUserProfile = async (
  { userId, userName }: { userId?: string, userName?: string }) => {
  if (userName && !userId) {
    userId = await fetchUserIdByName({ userName })
  }

  const variables = { userID: userId }
  const data = (
    await fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.USER_PROFILE })
  ) as ThreadsUserProfileResponse

  return mapUserProfile(data)
}

export const fetchUserThreads = async (
  { userId, userName }: { userId?: string, userName?: string }
) => {
  if (userName && !userId) {
    userId = await fetchUserIdByName({ userName })
  }

  const variables = { userID: userId }
  return fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.USER_THREADS })
}

export const fetchUserReplies = async (
  { userId, userName }: { userId?: string, userName?: string }
) => {
  if (userName && !userId) {
    userId = await fetchUserIdByName({ userName })
  }

  const variables = { userID: userId }
  return fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.USER_REPLIES })
}

export const fetchThreadReplies = ({ threadId }) => {
  const variables = { postID: threadId }
  return fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.THREADS_REPLIES })
}
