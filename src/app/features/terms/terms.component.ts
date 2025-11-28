// All three are simple pages
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `<div class="container" style="padding: 100px 0; text-align: center;"><h1 style="font-size: 3rem;">About Us</h1><p style="font-size: 1.5rem; margin-top: 2rem;">Leading job portal in Cambodia since 2025.</p></div>`
})
export class AboutComponent { }

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `<div class="container" style="padding: 100px 0; text-align: center;"><h1 style="font-size: 3rem;">Contact</h1><p style="font-size: 1.5rem; margin-top: 2rem;">Email: hello jobcambodia.com</p></div>`
})
export class ContactComponent { }

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `<div class="container" style="padding: 100px 0; text-align: center;"><h1 style="font-size: 3rem;">Terms & Conditions</h1><p style="font-size: 1.5rem; margin-top: 2rem;">Standard terms apply.</p></div>`
})
export class TermsComponent { }