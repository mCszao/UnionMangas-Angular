import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  images: Array<any> | undefined;
  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
    this.images = [
      {
        itemImageSrc:
          'https://static3.mangalivre.net/destaques/H7KuadWXcAh-L9GQ5r8aqg/9189/mashle.png',
        animeTitle: 'Marshal',
        index: 1,
      },
      {
        itemImageSrc:
          'https://static3.mangalivre.net/destaques/WCCUuefni3zSRkvLpdUFtQ/11/kingdom_7.png',
        animeTitle: 'Kingdom',
        index: 2,
      },
      {
        itemImageSrc:
          'https://static3.mangalivre.net/destaques/3wPz0osUAbdyQiyMCqQZtw/2412/tales-of-demons-gods.png',
        animeTitle: 'Tales of Demons',
        index: 3,
      },
      {
        itemImageSrc:
          'https://static3.mangalivre.net/destaques/svfC9txgcSVVgx2w5lz82w/7302/martialpeak.png',
        animeTitle: 'Martial Peak',
        index: 4,
      },
      {
        itemImageSrc:
          'https://static3.mangalivre.net/destaques/i2PsTWrI27Vnhat1QqxV_g/1248/y-pedal.png',
        animeTitle: 'Yowamushi Pedal',
        index: 5,
      },
      {
        itemImageSrc:
          'https://static3.mangalivre.net/destaques/kZQGhMaAVMjIzHL3Jeubog/8575/tomodachi-game.png',
        animeTitle: 'Tomodachi Game',
        index: 6,
      },
      {
        itemImageSrc:
          'https://static3.mangalivre.net/destaques/68rWvJzwEGWCPEhRIMlodQ/11283/sakamoto-days.png',
        animeTitle: 'Sakamoto Days',
        index: 7,
      },
    ];
  }
}
