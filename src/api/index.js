import ajax from "./axios";

const BASE = ''

export const reqLogin = (username,password) => ajax(BASE+'/login',{username,password},'POST')

export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')
