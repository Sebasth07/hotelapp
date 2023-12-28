import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Tablero',
                items: [
                    { label: 'Habitaciones', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
                    { label: 'Reservas', icon: 'pi pi-fw pi-calendar', routerLink: ['/dashboard/booking'] },
                    { label: 'Clientes', icon: 'pi pi-fw pi-user', routerLink: ['/dashboard/clients'] },
                    { label: 'Caja', icon: 'pi pi-fw pi-calculator', routerLink: ['/dashboard/cash-register'] }
                ]
            },
            {
                label: 'Configurar',
                items: [
                    { label: 'Hotel', icon: 'pi pi-fw pi-building',
                        items: [
                            {
                                label: 'Habitaciones',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/dashboard/rooms']
                            },
                            {
                                label: 'Usuarios',
                                icon: 'pi pi-fw pi-user-edit',
                                routerLink: ['/dashboard/users']
                            },
                            {
                                label: 'Permisos',
                                icon: 'pi pi-fw pi-unlock',
                                routerLink: ['/dashboard/permission']
                            },
                            {
                                label: 'Roles',
                                icon: 'pi pi-fw pi-check-circle',
                                routerLink: ['/dashboard/roles']
                            }
                        ]
                    },
                    { label: 'Inventario', icon: 'pi pi-fw pi-cart-plus',
                        items: [
                            {
                                label: 'Productos',
                                icon: 'pi pi-fw pi-star',
                                routerLink: ['/dashboard/rooms']
                            },
                            {
                                label: 'Bodegas',
                                icon: 'pi pi-fw pi-server',
                                routerLink: ['/dashboard/users']
                            },
                            {
                                label: 'Recetas',
                                icon: 'pi pi-fw pi-th-large',
                                routerLink: ['/dashboard/permission']
                            }
                        ]
                    },
                    {
                        label: 'Administrar',
                        icon: 'pi pi-fw pi-sliders-h',
                        items: [
                            { label: 'Hotel', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/admin/hotel'] },
                            { label: 'Usuarios', icon: 'pi pi-fw pi-user-plus', routerLink: ['/dashboard/admin/users'] },
                            { label: 'Roles', icon: 'pi pi-fw pi-lock-open', routerLink: ['/admin/roles'] },
                            { label: 'Cajas', icon: 'pi pi-fw pi-calculator', routerLink: ['/admin/roles'] }
                        ]
                    },
                ]
            },
            
            
            
            
            
        ];
    }
}
