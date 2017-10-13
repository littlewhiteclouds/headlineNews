import VueRouter from 'vue-router';

// 新闻模块
import news from '../../components/news/news';
import index from '../../components/news/index';
import cart from '../../components/news/cart';
import shangYe from '../../components/news/shangYe';
import caijing from '../../components/news/caijing';
import myFeeds from '../../components/news/myFeeds';


// 功能模块
import zhibo from '../../components/zhibo/zhibo';
import movie from '../../components/movie/movie';
import shequ from '../../components/shequ/shequ';
import mine from '../../components/mine/mine';


// 新闻详情
import newDetail from '../../components/news/new-detail';
//视听详情
import videoDetail from '../../components/movie/videoDetail';
// 图集
import photoView from '../../components/photo/photoview';

let routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        component: news,
        children: [
            {
                path: '',
                redirect: 'index'
            },
            {
                path: 'index',
                component: index,
                meta: {
                    keepAlive: false,
                    title: '界面新闻'
                }
            },
            {
                path: 'shangYe',
                component: shangYe
            },
            {
                path: 'caijing',
                component: caijing
            },
            {
                path: 'cart',
                component: cart
            },
            {
                path: 'myFeeds',
                component: myFeeds
            },
            {
                path: ':docId',
                components: {
                    default: index,
                    newDetail: newDetail
                },
                meta: {
                    keepAlive: false,
                    title: '新闻详情'
                }
            }
        ]
    },
    {
        path: '/zhibo',
        component: zhibo,
        meta: {
            title: '直播'
        }
    },
    {
        path: '/movie',
        component: movie,
        meta: {
            title: '视听'
        }
    },
    {
        name: 'videoDetail',
        path: '/videoDetail',
        component: videoDetail,
        meta: {
            title: '视频'
        }
    },
    {
        path: '/shequ',
        component: shequ,
        meta: {
            title: '社区'
        }
    },
    {
        path: '/mine',
        component: mine,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/photoview/:id',
        component: photoView,
        meta: {
            title: '图集'
        }
    }
];

let router = new VueRouter({
    routes
});

router.afterEach($route => {
    document.title = $route.meta.title;
});

export default router;
