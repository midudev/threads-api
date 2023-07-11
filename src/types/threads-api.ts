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
