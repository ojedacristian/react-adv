import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent,
    name: string
}

// const Lazy1 = lazy( ()=> import(/* webpackChunkName: 'LazyPage1'*/ '../01-lazyload/pages/LazyPage1') )
// const Lazy2 = lazy( ()=> import(/* webpackChunkName: 'LazyPage2'*/ '../01-lazyload/pages/LazyPage2') )
// const Lazy3 = lazy( ()=> import(/* webpackChunkName: 'LazyPage3'*/ '../01-lazyload/pages/LazyPage3') )

const LazyLayout = lazy( ()=> import(/* webpackChunkName: 'LazyLayout'*/ '../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path:'/lazy-layout/*',
        to:'/lazy-layout',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        path:'/nolazy',
        to:'/nolazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]