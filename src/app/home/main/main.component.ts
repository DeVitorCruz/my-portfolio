import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { BrandBarComponent } from './component/brand-bar/brand-bar.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ServicesComponent } from './component/services/services.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { ContactComponent } from './component/contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeComponent,
    BrandBarComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    ExperienceComponent,
    TestimonialComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent { }
