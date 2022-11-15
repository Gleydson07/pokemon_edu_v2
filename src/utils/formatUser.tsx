export const formatUser = (user:any) => {
  const nameSplited = user?.name?.split(" ");
  const nameFormatted = nameSplited[1]?.length <= 3 ?
    [nameSplited[0], nameSplited[1], nameSplited[2]].join(' ') :
    [nameSplited[0], nameSplited[1]].join(' ');

  return {
    ...user,
    name: nameFormatted
  }
}