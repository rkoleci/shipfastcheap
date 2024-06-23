import { appName, domain } from "../config"

const getSEOTags = (customPageTags?: any) => ({
    appName: appName,
    appDescription: 'This is the best boilerplate',
    domainName: domain,
    ...customPageTags
})

export default getSEOTags

