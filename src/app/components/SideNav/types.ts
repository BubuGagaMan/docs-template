export interface LinkProps  {
    label: string
    /**
     * just the final section of the link
     * e.g. /topic-one/sub-topic-two => sub-topic-two
     * used for comparison (i.e. adding extra data instead of neccessetating splits)
     */

    linkHeader: string
    href: string
}

// note that the primary links reside in the main, top nav bar...
export interface secondaryLink extends LinkProps {
    tertiaryLinks: LinkProps[]
}