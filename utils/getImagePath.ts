import { useAppConfig } from 'nuxt/app'

// It will be available as getImagePath() (camelCase of file name without extension)
export default function (file: String) {
  const appConfig = useAppConfig()
  return `${appConfig.baseUrl}/${appConfig.mediaBaseURL}/${appConfig.pageUrlName}/${file}`
}
