import * as webpack from 'webpack'
import { CreateWebpackConfig } from '../config/index'

/** Created assets in the webpack build */
export interface Assets {
    vendor: {
        js: string
    }
    main: {
        js: string
        css: string
    }
}

/** Application build configuration */
export interface BuildConfig {
    /** Prefix for all assets (JS, CSS, media, fonts) with trailing slash */
    ASSETS_PATH_PREFIX: string

    /** The location where assets are resolved from
     * default is the working directory is the server output directory.
     *
     * If this is not the case, set to the same value as CLIENT_OUTPUT
     */
    ASSETS_ROOT: string

    /** root path of your application */
    BASE: string

    /** entry file for the client */
    CLIENT_ENTRY: string

    /** file for client polyfills if needed */
    CLIENT_POLYFILLS: string | false

    /** output directory for the client build */
    CLIENT_OUTPUT: string

    /** Autoprefixer browser compatibilty  */
    CSS_AUTOPREFIXER: string[]

    /** set to false if the application is serverless */
    HAS_SERVER: boolean

    /** List paths to exclude from linting */
    LINT_EXCLUDE: string[]

    /** Default port for the dev server (when process.env.PORT is not set) */
    DEV_SERVER_PORT: number

    /** URL prefix for all resources */
    PUBLIC_PATH: string

    /** entry file for the server if applicable */
    SERVER_ENTRY: string

    /** if true, all externals will be bundled */
    SERVER_BUNDLE_ALL: boolean

    /** modules which the server build includes in the bundle */
    SERVER_INCLUDE_IN_BUNDLE: string[]

    /** output directory of the server */
    SERVER_OUTPUT: string

    /** directory that is served as static resources */
    SERVER_PUBLIC_DIR: string | false

    /** if true, no hash is added to the generated assets */
    STATIC_RESOURCE_NAMES: boolean

    /** Additional environment variables for build stats */
    STATS_ENV: { [key: string]: string }

    /** Pages to run build stats on, format { name: URL } */
    STATS_PAGES: { [name: string]: string }
}

/** Use to override the application configuration */
export type BuildConfigOverride = Partial<BuildConfig>

/** Override the webpack config per target and environment */
export interface WebpackHooks {
    base?: webpack.Configuration | CreateWebpackConfig
    server?: webpack.Configuration | CreateWebpackConfig
    client?: webpack.Configuration | CreateWebpackConfig
    dev?: webpack.Configuration | CreateWebpackConfig
    prod?: webpack.Configuration | CreateWebpackConfig
    serverDev?: webpack.Configuration | CreateWebpackConfig
    serverProd?: webpack.Configuration | CreateWebpackConfig
    serverDebug?: webpack.Configuration | CreateWebpackConfig
    clientDev?: webpack.Configuration | CreateWebpackConfig
    clientProd?: webpack.Configuration | CreateWebpackConfig
    clientDebug?: webpack.Configuration | CreateWebpackConfig
}

export type BuildTarget = 'server' | 'client'

export type BuildEnvironment = 'dev' | 'prod' | 'debug'

export type BuildParam = BuildTarget | BuildEnvironment | 'complete'

export type StartParam = 'fast' | 'watch' | 'prod' | 'debug' | 'client' | 'inspect'

export type WatchParam = 'server' | 'fast' | 'client' | 'inspect'
