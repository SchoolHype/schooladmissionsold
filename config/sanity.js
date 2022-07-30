import { createClient } from 'next-sanity'

export const config = {
    projectId: "fir-23ecf",
    dataset: "development",
    apiVersion: "2022-06-10",
    useCdn: false
}

const client = createClient(config)

export default client