const getters = {
  // app
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  device: state => state.app.device,
  // tags view
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  // user
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  // 权限路由
  permission_routers: state => state.permission.routers,
  // 动态添加路由
  addRouters: state => state.permission.addRouters,
  // error log
  errorLogs: state => state.errorLog.logs
}
export default getters
