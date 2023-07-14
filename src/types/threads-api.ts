// User profile types

export type ThreadsUserProfileResponse = {
  data:       Data;
  extensions: Extensions;
}

export type Data = {
  userData: UserData;
}

export type UserData = {
  user: User;
}

export type User = {
  is_private:                     boolean;
  profile_pic_url:                string;
  username:                       string;
  hd_profile_pic_versions:        HDProfilePicVersion[];
  is_verified:                    boolean;
  biography:                      string;
  biography_with_entities:        null;
  follower_count:                 number;
  profile_context_facepile_users: null;
  bio_links:                      BioLink[];
  pk:                             string;
  full_name:                      string;
  id:                             null;
}

export type BioLink = {
  url: string;
}

export type HDProfilePicVersion = {
  height: number;
  url:    string;
  width:  number;
}

export type Extensions = {
  is_final: boolean;
}

// User threads types

export type UserThreadsResponse = {
  data:       { mediaData: { threads: Thread[] } };
  extensions: Extensions;
}

export type Thread = {
  thread_items: ThreadItem[];
  id:           string;
}

export type ThreadItem = {
  post:                    Post;
  line_type:               LineType;
  view_replies_cta_string: null | string;
  reply_facepile_users:    ReplyFacepileUser[];
  should_show_replies_cta: boolean;
  __typename:              ThreadItemTypename;
}

export enum ThreadItemTypename {
  XDTThreadItem = "XDTThreadItem",
}

export enum LineType {
  Line = "line",
  None = "none",
}

export type Post = {
  user:                 User;
  image_versions2:      PostImageVersions2;
  original_width:       number;
  original_height:      number;
  video_versions:       VideoVersion[];
  carousel_media:       CarouselMedia[] | null;
  carousel_media_count: number | null;
  pk:                   string;
  has_audio:            boolean | null;
  text_post_app_info:   TextPostAppInfo;
  caption:              Caption;
  taken_at:             number;
  like_count:           number;
  code:                 string;
  media_overlay_info:   null;
  id:                   string;
}

export type Caption = {
  text: string;
}

export type CarouselMedia = {
  image_versions2: CarouselMediaImageVersions2;
  video_versions:  any[];
  has_audio:       boolean | null;
  original_height: number;
  original_width:  number;
  pk:              string;
  id:              string;
}

export type CarouselMediaImageVersions2 = {
  candidates: PurpleCandidate[];
}

export type PurpleCandidate = {
  url: string;
}

export type PostImageVersions2 = {
  candidates: FluffyCandidate[];
}

export type FluffyCandidate = {
  height:     number;
  url:        string;
  width:      number;
  __typename: CandidateTypename;
}

export enum CandidateTypename {
  XDTImageCandidate = "XDTImageCandidate",
}

export type TextPostAppInfo = {
  link_preview_attachment: string | null;
  share_info:              ShareInfo;
  reply_to_author:         string | null;
  is_post_unavailable:     boolean;
}

export type ShareInfo = {
  quoted_post:   any;
  reposted_post: any;
}

export type UserShort = {
  profile_pic_url: string;
  username:        string;
  id:              string | null;
  is_verified:     boolean;
  pk:              string;
}

export type VideoVersion = {
  type:       number;
  url:        string;
  __typename: VideoVersionTypename;
}

export enum VideoVersionTypename {
  XDTVideoVersion = "XDTVideoVersion",
}

export type ReplyFacepileUser = {
  __typename:      ReplyFacepileUserTypename;
  id:              null;
  profile_pic_url: string;
}

export enum ReplyFacepileUserTypename {
  XDTUserDict = "XDTUserDict",
}

// Threads replies types

export type ThreadsRepliesResponse = {
  data: { data: { containing_thread: Thread; reply_threads: Thread[] } };
  extensions: Extensions;
}