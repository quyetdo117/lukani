const S =  document.querySelector.bind(document)
const SS =  document.querySelectorAll.bind(document)

// toggle category

const btnCate = S('.hd-mid__category')

const closeCate = (e) => {
    if(!btnCate.contains(e.target)){
        btnCate.classList.remove('active')
        document.removeEventListener('click', closeCate)
    }
}

btnCate.addEventListener('click', () => {
    if(btnCate){
        btnCate.classList.toggle('active')
        document.addEventListener('click', closeCate)
    }
})

// tablet

const btnCateTablet = S('.hd-mid__category.tablet')

const closeCateTablet = (e) => {
    console.log(btnCateTablet.contains(e.target))
    if(!btnCateTablet.contains(e.target)){
        btnCateTablet.classList.remove('active')
        document.removeEventListener('click', closeCateTablet)
    }
}

btnCateTablet.addEventListener('click', () => {
    if(btnCateTablet){
        btnCateTablet.classList.toggle('active')
        document.addEventListener('click', closeCateTablet)
    }
})


// show cart

const btnCart = S('.hd-mid__account-item.cart')
const wrapCart = S('.cart__wrap')
const btnCloseCart = S('.cart__close')
const boxCart = S('.cart__box')

boxCart.addEventListener('click', (e) => {
    e.stopPropagation()
})

const closeCart = (e) => {
    e.stopPropagation()
    if(wrapCart){
        boxCart.style.right = '-355px'
        wrapCart.style.backgroundColor = 'transparent'
        setTimeout(() => {
            wrapCart.classList.remove('active')
        }, 300)
    }
}
btnCart.addEventListener('click', () => {
    if(wrapCart){
        boxCart.style.right = '0px'
        wrapCart.style.backgroundColor = 'rgba(0 0 0/25%)'
        wrapCart.classList.add('active')
    }
})
btnCloseCart.addEventListener('click', closeCart)
wrapCart.addEventListener('click', closeCart)

// cilck category

const btnCateList = S('.btn__category')
const wrapCate = S('.hd-bot__category')
const listCate = S('.category__list')


const closeCateBottom = (e) => {
    if(!listCate.contains(e.target)){
        if(wrapCate){
            listCate.style.animation = 'categoryCloseList linear 0.3s'
            listCate.style.overflow = 'hidden'
            setTimeout(() => {
                wrapCate.classList.remove('active')
                document.removeEventListener('click', closeCateBottom)
            }, 250)
        }
    }
}

btnCateList.addEventListener('click', (e) => {
    e.stopPropagation()
    if(wrapCate){
        if(wrapCate.classList.contains('active')){
            listCate.style.animation = 'categoryCloseList linear 0.3s'
            listCate.style.overflow = 'hidden'
            setTimeout(() => {
                wrapCate.classList.remove('active')
                document.removeEventListener('click', closeCateBottom)
            }, 250)
        }else{
            wrapCate.classList.add('active')
            listCate.style.animation = 'categoryList linear 0.3s'
            setTimeout(() => {
                listCate.style.overflow = 'visible'
            }, 300);
            document.addEventListener('click', closeCateBottom)
        }
    }
})

// tablet menu

const btnMenu = S('.menu-icon')
const wrapTabletMenu = S('.tablet-menu')
const btnCloseMenu = S('.tablet-menu__btn-close')
const boxMenu = S('.tablet-menu__box')
boxMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})
const closeMenu = () => {
    if(wrapTabletMenu){
        boxMenu.style.animation = 'tabletCloseMenu linear 0.3s'
        wrapTabletMenu.style.backgroundColor = 'transparent'
        setTimeout(() => {
            wrapTabletMenu.classList.remove('active')
        }, 250)
    }
}

btnCloseMenu.addEventListener('click', closeMenu)
wrapTabletMenu.addEventListener('click', closeMenu)

btnMenu.addEventListener('click', () => {
    if(wrapTabletMenu){
        boxMenu.style.animation = 'tabletMenu linear 0.3s'
        wrapTabletMenu.style.backgroundColor = 'rgba(0 0 0/25%)'
        wrapTabletMenu.classList.add('active')
    }
})

// tablet category


const itemsTabletCate = SS('.tablet-category__item')

itemsTabletCate.forEach((item) => {
    item.addEventListener('click', () => {
        const subList = item.querySelector('.tablet-category__sub-list')
        const sizeSubItem = subList.querySelectorAll('.tablet-category__sub-item').length;
        subList.addEventListener('click', (e) => {
            e.stopPropagation()
        })
        if(item.classList.contains('active')){
            item.classList.remove('active')
            subList.style.maxHeight = 0 + 'px'
        }else{
            const itemActive = S('.tablet-category__item.active')
            if(itemActive){
                itemActive.querySelector('.tablet-category__sub-list').style.maxHeight = '0px'
                itemActive.classList.remove('active')

                item.classList.add('active')
                subList.style.maxHeight = sizeSubItem*39 + 'px'
                
            }else{
                item.classList.add('active')
                subList.style.maxHeight = sizeSubItem*39 + 'px'
            }
        }
    })
})

// toggle cate tablet

const btnTabletCate = S('.tablet-category__btn')

btnTabletCate.onclick = () => {
    const tabletCate = S('.tablet-category')
    const tabletCateList = S('.tablet-category__list')
    const closeCate = (e) => {
        if(!tabletCate.contains(e.target)){
            tabletCateList.classList.remove('active')
            document.removeEventListener('click', closeCate)
        }
    }
    if(tabletCateList){
        tabletCateList.classList.toggle('active')
        document.addEventListener('click', closeCate)
    }
}

window.addEventListener('scroll', () => {
    const headerBottom = S('.header-bottom')
    const upTop = S('.upToTop');
    if(window.scrollY > 170){
        if(headerBottom){
            upTop.style.display = 'block'
            headerBottom.classList.add('fixed')
        }
    }else{
        if(headerBottom){
            upTop.style.display = 'none'
            headerBottom.classList.remove('fixed')
        }
    }
})


