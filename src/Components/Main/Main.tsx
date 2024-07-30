import style from "../../style/styleOfMain.module.css"


export const Main = () => {

    return (
       <>
       <div id={style.container}>

        <header id={style.header}>
            <h1>MOB-X</h1>
        </header>
        <div id={style.menu}>

<ul>
    <li>Главная страница</li>
    <li>О нас</li>
    <li>Личный кабинет</li>
    <li>Каталог товаров</li>
    <li>Розыгрыши</li>
    <li>Новости</li>
</ul>

</div>




        <footer id={style.footer}></footer>

       </div>
       </> 
    )
}
