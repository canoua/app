// 3.6 Представьте, что с какого-то api, с которым вы интегрируетесь, на ваш бэкенд приходит data.json
// Наша задача описать его так, чтобы мы после этого могли типизировано оперировать с данными, которые пришли из json
// То есть нам надо описать один или несколько интерфейсов, которые описывают эти данные

interface Data {
  userId: number,
  id: number,
  title: string,
  info: Info,
  tags: Tags[]
}

interface Info {
  desc: string,
  isActive: boolean
}

interface Tags {
  name: string,
  value: number
}
