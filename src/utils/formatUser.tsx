import { UserProps } from "../hooks/useAuth";

export const formatUser = (user:UserProps) => {
  let nameFormatted = 'User name';
  if (user.name) {
    const nameSplited = user.name.split(" ");
    nameFormatted = nameSplited[1].length <= 3 ?
      [nameSplited[0], nameSplited[1], nameSplited[2]].join(' ') :
      [nameSplited[0], nameSplited[1]].join(' ');
  }

  return {
    ...user,
    name: nameFormatted
  }
}