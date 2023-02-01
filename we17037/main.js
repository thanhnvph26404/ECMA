// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// import { homePage,a } from './pages/home.js'
// console.log('home page:', homePage)
// console.log('a:', a)
// import Homepage from './pages/home.js'
// console.log('home page', Homepage())

import 'bootstrap/dist/css/bootstrap.min.css';  
import { render, router } from './lib'
import AboutPage from './pages/about.js'
import ContactPage from './pages/contact.js'
import DetailProjectPage from './pages/detail-project.js'
import PostPage from './pages/post.js'
import ProjectsPage from './pages/project'
import Homepage from './pages/home.js'
import NotFoundPage from './pages/not-found'
import AdminProjectsPage from './pages/admin/project'

const app = document.querySelector('#app')
router.on("/", () => render(Homepage, app))
router.on("/about", () => render(AboutPage, app))
router.on("/contact", () => render(ContactPage, app))
router.on("/projects", () => render(ProjectsPage, app))
router.on("/project/:id", (params) => render(() =>DetailProjectPage(params), app))
router.on("/posts", () => render(PostPage, app))
router.notFound(() => render(NotFoundPage, app));
router.on("/admin/project", () => render(AdminProjectsPage, app))

router.resolve()