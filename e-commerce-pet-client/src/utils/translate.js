import React, { Fragment, useEffect, useState } from 'react'
import ReactDomServer from 'react-dom/server'
import getCountry from 'js-user-country'
import Button from '../components/Button'
const UseTranslate = (Props) => {
    const nameCountry = getCountry().name
    const strCountry =
        nameCountry.toLowerCase().charAt(0) +
        nameCountry.toLowerCase().charAt(1)

    const [styleCss, setStyleCss] = useState(null)
    const { Tag, className, lang, useUI, text } = Props.data

    const { onPress, style, dep } = Props
    const language = lang
    const elReactString = ReactDomServer.renderToString(Props.children)
    let formattedText1 = ''
    if (text) {
        formattedText1 = text.replace(/\n/g, ' ')
    }
    const fakeEl = () => {
        return <span>{formattedText1}</span>
    }
    const elUIInnerString = ReactDomServer.renderToString(fakeEl())

    const [elTranslate, setElTranslate] = useState('')
    const [elTranslateUI, setElTranslateUI] = useState('')
    const handleTrans = async () => {
        if (useUI) {
            const data = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${'en'}&tl=${
                    language ? language : strCountry
                }&dt=t&q=${encodeURIComponent(elUIInnerString)}`
            )
            const jsonData = await data.json()
            if (jsonData[0]) {
                const newArr = jsonData[0].map((itemz, indexz) => {
                    return itemz[0]
                })
                setElTranslateUI(newArr.join(''))
            }
        } else {
            const data = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${'en'}&tl=${
                    language ? language : strCountry
                }&dt=t&q=${encodeURIComponent(elReactString)}`
            )
            const jsonData = await data.json()
            if (jsonData[0]) {
                const newArr = jsonData[0].map((itemz, indexz) => {
                    return itemz[0]
                })
                setElTranslate(newArr.join(''))
            }
        }
    }
    useEffect(() => {
        if (language && language.length > 0) {
            if (language !== 'en') {
                try {
                    handleTrans()
                } catch (error) {}
            }
        }
    }, [lang])

    useEffect(() => {
        try {
            handleTrans()
        } catch (error) {}
    }, [dep])
    useEffect(() => {
        setStyleCss(style)
    }, [style])
    const match = elTranslateUI.match(
        /<(\w+)(?:\sclass="([^"]*)")?>(.*?)<\/\1>/
    )

    if (useUI) {
        if (match) {
            const valueInside = match[3]
            return <> {valueInside}</>
        } else {
            return (
                <span style={{ visibility: 'hidden' }}>{formattedText1}</span>
            )
        }
    }
    if (language !== 'en') {
        return (
            <Tag
                onClick={onPress ? onPress : undefined}
                style={styleCss ? styleCss : {}}
                className={className}
                dangerouslySetInnerHTML={{ __html: elTranslate }}
            ></Tag>
        )
    } else if (language == 'en') {
        return (
            <Tag
                onClick={onPress ? onPress : undefined}
                style={styleCss ? styleCss : {}}
                className={className}
            >
                {Props.children}
            </Tag>
        )
    } else {
        return <></>
    }
}

export default UseTranslate
