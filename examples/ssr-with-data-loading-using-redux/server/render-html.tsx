import { RenderHtml, transferState } from '../../../lib/runtime/server/ssr'
import { SSRState } from './start'

export const renderHtml: RenderHtml<SSRState> = ({ head, renderMarkup, assets, context }) => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link id="css-main" type="text/css" rel="stylesheet" href="${assets.main.css}">
        ${head && head.title ? head.title.toString() : ''}
        ${head && head.base ? head.base.toString() : ''}
        ${head && head.script ? head.script.toString() : ''}
        ${head && head.meta ? head.meta.toString() : ''}
        ${head && head.link ? head.link.toString() : ''}
        ${transferState('STATE', context.ssrRequestProps.store.getState())}
    </head>
    <body>
        <div id="root">${renderMarkup.html}</div>
        <script src="${assets.vendor.js}"></script>
        <script async src="${assets.main.js}"></script>
    </body>
</html>`
}
