import Head from 'next/head'
import React from 'react'
import { SeoProps } from '../../types'

function Seo({ 
    title = "Código Postal", 
    description, 
    slogan = 'Código Postal Online', 
    isIndex = false,
    isBlank = false
} : SeoProps) {

    const titleDefault = 'Código Postal';

    return (
        <Head>
            <title>{ isIndex ? `${title } | ${slogan} ` : `${title} | ${titleDefault}` } </title>
            {description && <meta name="description" content={description} />}
            {isBlank && <meta name="robots" content="noindex,nofollow" />}
        </Head>
    )
}

export default Seo
