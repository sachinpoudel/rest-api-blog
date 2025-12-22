export const getProfilePicUrl = (
  firstName: string,
  lastName: string,
  gender: string | undefined,
  profileUrl?: string
): string => {
  if (profileUrl && profileUrl.trim().length > 0) {
    return profileUrl;
  }
  const userName = `${firstName.trim()} ${lastName.trim()}`;
  const randomProfileUrl = `https://avatar.iran.liara.run/username?username=${userName}`;
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

  return gender === "male" ? boyProfilePic : gender === "female" ? girlProfilePic : randomProfileUrl;
};
