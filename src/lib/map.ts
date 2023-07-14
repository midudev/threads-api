import { ThreadsRepliesResponse, ThreadsUserProfileResponse, UserThreadsResponse } from '../types/threads-api'

/*
{"data":{"userData":{"user":{"is_private":false,"profile_pic_url":"https://scontent.cdninstagram.com/v/t51.2885-19/358174537_954616899107816_8099109910283809308_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=s5qTOIc_KREAX8qfpDD&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDaktW3vHUeFvaE14qoy7LmddGuAqWUh2uirC7ulm_TsQ&oe=64B34341&_nc_sid=10d13b","username":"midu.dev","hd_profile_pic_versions":[{"height":320,"url":"https://scontent.cdninstagram.com/v/t51.2885-19/358174537_954616899107816_8099109910283809308_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=s5qTOIc_KREAX8qfpDD&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBUgVik0k-VaqXmyuuJUp6bEmAyDHIkkB3ssbnHYwGg_A&oe=64B34341&_nc_sid=10d13b","width":320},{"height":640,"url":"https://scontent.cdninstagram.com/v/t51.2885-19/358174537_954616899107816_8099109910283809308_n.jpg?stp=dst-jpg_s640x640&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=s5qTOIc_KREAX8qfpDD&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCG0VVjm58zezRMrUgG_HlTuOL0MlMMsUpGRDgn4CrMiA&oe=64B34341&_nc_sid=10d13b","width":640}],"is_verified":false,"biography":"👨‍💻 Ingeniero de Software + JavaScript\n⌨️ Aprende Programación conmigo\n🏆 Google Expert + GitHub Star\n🙌 Comparto recursos y tutoriales","biography_with_entities":null,"follower_count":34756,"profile_context_facepile_users":null,"bio_links":[{"url":"https://twitch.tv/midudev"}],"pk":"8242141302","full_name":"midudev • Programación y Desarrollo JavaScript","id":null}}},"extensions":{"is_final":true}}
*/

// Organises the original response of the user profile
export const mapUserProfile = (rawResponse: ThreadsUserProfileResponse) => {
  const userApiResponse = rawResponse?.data?.userData?.user
  if (!userApiResponse) return null

  const { username, is_verified, biography, follower_count, bio_links, pk: id, full_name, hd_profile_pic_versions, profile_pic_url } = userApiResponse

  const profile_pics = [{
    height: 150,
    width: 150,
    url: profile_pic_url
  }, ...hd_profile_pic_versions]

  return {
    id,
    username,
    is_verified,
    biography,
    follower_count,
    bio_links,
    full_name,
    profile_pics
  }
}

// Organises the original response of the user threads
export const mapUserThreads = (rawResponse: UserThreadsResponse) => {
  if (!rawResponse.data) return null

  return rawResponse.data.mediaData.threads.map(({ id, thread_items }) => {
    return { id, items: thread_items }
  })
}

// Organises the original response of the thread replies
export const mapThreadsReplies = (rawResponse: ThreadsRepliesResponse) => {
  if (!rawResponse.data) return null

  const containing_thread = {
    id: rawResponse.data.data.containing_thread.id,
    items: rawResponse.data.data.containing_thread.thread_items
  }

  const reply_threads = rawResponse.data.data.reply_threads.map(({ id, thread_items }) => {
    return { id, thread_items }
  })

  return { containing_thread, reply_threads }
}