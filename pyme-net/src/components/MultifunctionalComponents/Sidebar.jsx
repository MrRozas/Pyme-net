import React from 'react'
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from 'cdbreact';

export const Sidebar = () => { // Componente que incorpora una Sidebar (aún no está implementada en alguna página).
  return (
    <CDBSidebar textColor="#fff" backgroundColor="#333" style={{ position:'absolute', margin: 'auto' }}> {/* Se define Sidebar con estilos correspondientes. */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />} >Productos</CDBSidebarHeader> {/* Se define header del Sidebar. */}
        <CDBSidebarContent> {/* Se define contenedor del Sidebar. */}
          <CDBSidebarMenu> {/* Se define menú del Sidebar, desplegando items. */}
            <CDBSidebarMenuItem icon="th-large" iconSize="lg">
              Categoría 1
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note" iconSize="sm">
              Categoría 2
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Categoría 3
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="gamepad" iconType="solid">
              Categoría 4
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}> {/* Se define Footer del Sidebar, con estilos incorporados. */}
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  )
}

export default Sidebar;