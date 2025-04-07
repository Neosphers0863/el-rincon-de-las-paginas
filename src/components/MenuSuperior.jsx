const MenuSuperior = () => {
  return (
    <aside class="sidebar">
        <div class="logo">
            <img src="Logo_Libreria.png" alt="El Rincón de las Páginas"/>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Título, Autor, Género"/>
        </div>
        <nav class="nav-menu">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Colecciones ▸</a></li>
                <li><a href="#">Nosotros ▸</a></li>
                <li><a href="#">Ingresar ▸</a></li>
                <li><a href="#">Registrar ▸</a></li>
            </ul>
        </nav>
    </aside>
  )
}

export default MenuSuperior