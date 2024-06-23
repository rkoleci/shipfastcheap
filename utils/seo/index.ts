import { appName, domain } from "../config"

const getSEOTags = (customPageTags?: any) => ({
    appName: appName,
    appDescription: 'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.',
    domainName: domain,
    ...customPageTags
})

export default getSEOTags

