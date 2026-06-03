import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import Swal from 'sweetalert2';
import { SUPER_ADMINS } from '../../../../core/constants/emails.constant';
declare const bootstrap: any;
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  validatedPlayer = false;
  playerLoged: any;
  constructor(private authService: AuthService) {}
  loginWithGoogle() {
    this.authService.loginWithGoogle(this.playerLoged);
  }
  async showDocumentPrompt() {
    const opened = document.querySelector(
      '.offcanvas.show',
    ) as HTMLElement | null;
    if (opened) {
      const inst =
        bootstrap.Offcanvas.getInstance(opened) ??
        new bootstrap.Offcanvas(opened);
      inst.hide();
      await new Promise((r) => setTimeout(r, 250));
    }
    const { value: userDocument, isDismissed } = await Swal.fire({
      title: 'Acceso al equipo ⚽',
      input: 'text',
      inputLabel: 'Ingresa tu Llave',
      inputPlaceholder: 'Número de llave',
      inputAttributes: {
        maxlength: '20',
        autocapitalize: 'off',
        autocorrect: 'off',
      },
      confirmButtonText: 'Validar acceso',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      returnFocus: false,
    });
    if (isDismissed || !userDocument) return;
    const normalizedDocument = userDocument.trim();
    try {
      this.playerLoged = SUPER_ADMINS.find(
        (admin) => admin.document === normalizedDocument,
      );
      if (!this.playerLoged) {
        await Swal.fire({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'No perteneces al equipo.',
        });
        return;
      }
      this.validatedPlayer = true;
      await Swal.fire({
        icon: 'success',
        title: 'Acceso aprobado',
        text: 'Ahora continúa con Google 🚀',
      });
    } catch (error) {
      console.error(error);
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error validando acceso.',
      });
    }
  }
}
