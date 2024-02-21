
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



import PointPointManager from "./components/listers/PointPointCards"
import PointPointDetail from "./components/listers/PointPointDetail"

import AgreementAgreementManager from "./components/listers/AgreementAgreementCards"
import AgreementAgreementDetail from "./components/listers/AgreementAgreementDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [

            {
                path: '/points/points',
                name: 'PointPointManager',
                component: PointPointManager
            },
            {
                path: '/points/points/:id',
                name: 'PointPointDetail',
                component: PointPointDetail
            },

            {
                path: '/agreements/agreements',
                name: 'AgreementAgreementManager',
                component: AgreementAgreementManager
            },
            {
                path: '/agreements/agreements/:id',
                name: 'AgreementAgreementDetail',
                component: AgreementAgreementDetail
            },




    ]
})
