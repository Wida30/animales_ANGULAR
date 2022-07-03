import {
  animalInterface,
  habitadInterface,
} from './../modelos/animales.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  public nocturno: boolean = true;
  public tema: string = 'DIURNO';
  public visible: boolean = true;

  public tierra: habitadInterface;
  public aire: habitadInterface;
  public agua: habitadInterface;

  public tierranoc: habitadInterface;
  public airenoc: habitadInterface;
  public aguanoc: habitadInterface;

  constructor() {
    this.tierra = {
      habitad: 'tierra',
      vive: [
        {
          nombre: 'leon',
          descripcion:
            'El león es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana y una pequeña zona del noroeste de India ',
          foto: {
            src: '../../assets/dia/leon.jpg',
            alt: 'leon',
          },
        },
        {
          nombre: 'oso Pardo',
          descripcion:
            'Es un habitante característico de los bosques maduros de Europa, Asia templada y América del Norte. Los osos son omnívoros: en primavera y otoño su alimentación es sobre todo vegetal, pero también aprecian las carroñas. Su alimento preferido son los panales de miel. Además cazan pequeños vertebrados e insectos y, en el momento de remonte de los salmones en los ríos, se hacen pescadore',
          foto: {
            src: '../../assets/dia/osos.jpg',
            alt: 'osos',
          },
        },
        {
          nombre: 'Dragon de komodo',
          descripcion:
            'es una especie de saurópsido de la familia de los varánidos, endémico de algunas islas de Indonesia central. A pesar de que estos lagartos se alimentan principalmente de carroña, también cazan y tienden emboscadas a sus presas, que incluyen invertebrados, aves y mamíferos',
          foto: {
            src: '../../assets/dia/dragon.jpg',
            alt: 'rino',
          },
        },
        {
          nombre: 'Rinoceronte Blanco',
          descripcion:
            'Es la mayor de las cinco especies de rinocerontes que existen, el cuarto animal terrestre más grande y el cuarto mamífero terrestre más pesado después de las tres especies de elefantes. El cuerno de los rinocerontes no es un cuerno verdadero, Es una dureza en la zona de la nariz y está formada por queratina',
          foto: {
            src: '../../assets/dia/rinoceronte.JPG',
            alt: 'rino',
          },
        },
        {
          nombre: 'Oveja',
          descripcion:
            '​es un mamífero cuadrúpedo ungulado doméstico, utilizado como ganado. Como todos los rumiantes, las ovejas son artiodáctilos, o animales con pezuñas. A pesar de que el término oveja se aplica a muchas especies del género Ovis, por lo general hace referencia a la subespecie doméstica de Ovis orientalis.',
          foto: {
            src: '../../assets/dia/oveja.jpg',
            alt: 'oveja',
          },
        },
      ],
    };

    this.aire = {
      habitad: 'aire',
      vive: [
        {
          nombre: 'aguila',
          descripcion:
            'Las águilas se caracterizan principalmente por su gran tamaño, constitución robusta, cabeza y pico pesados. Las diversas especies y subespecies de águilas pueden encontrarse en casi cualquier parte del mundo. Ha constituido el símbolo de la majestad, el poder y la victoria a lo largo de la historia.',
          foto: {
            src: '../../assets/dia/aguila.jpg',
            alt: 'aguila',
          },
        },

        {
          nombre: 'Loro',
          descripcion:
            'Los loros se caracterizan por tener un pico curvado, con una mandíbula inferior con cierta movilidad en su conexión con el cráneo y situada en una posición bastante vertical. Además tienen una gran capacidad craneal y son uno de los grupos de aves más inteligentes. Son aves que vuelan bien y son capaces de agarrarse a las ramas de los árboles y trepar por ellas con destreza, gracias a sus garras prensiles zigodáctilas.',
          foto: {
            src: '../../assets/dia/loro.jpg',
            alt: 'aguila',
          },
        },

        {
          nombre: 'Colibri',
          descripcion:
            'Los colibríes son seres nativos de casi todos los ecosistemas. Estas hermosas avecillas de apenas 2, 4 destacan entre los seres polinizadores gramos poseen una aguda visión, unas plumas indecentes en el cuello unos pies cortos, pico largo y delgado, una lengua tubular que enrolla en la cabeza su lengua bifurcada es más larga que el pico con la cual chupa el néctar',
          foto: {
            src: '../../assets/dia/colibri.jpg',
            alt: 'colibri',
          },
        },

        {
          nombre: 'Frailecillo',
          descripcion:
            'El frailecillo atlántico tiene una corona y espalda negra, mejillas gris pálido y “pantalones” blancos. Es ancho, con un pico rojo y negro visiblemente marcado y patas naranjas que contrastan con su plumaje. Esta muda de piel estando en el mar en invierno y algunas de las características faciales con colores brillantes se pierden',
          foto: {
            src: '../../assets/dia/fraile.jpg',
            alt: 'frailecillo',
          },
        },
      ],
    };

    this.agua = {
      habitad: 'agua',
      vive: [
        {
          nombre: 'delfin',
          descripcion:
            'son mamíferos de una familia de cetáceos odontocetos muy heterogénea, que comprende 37 especies actuales. Miden entre 2 y 8 metros de largo, con el cuerpo fusiforme y la cabeza de gran tamaño, el hocico alargado y solo un espiráculo en la parte superior de la cabeza (orificio respiratorio que muchos animales marinos tienen como contacto del aire o agua con su sistema respiratorio interno). Son carnívoros estrictos.',
          foto: {
            src: '../../assets/dia/delfin.jpg',
            alt: 'delfin',
          },
        },
        {
          nombre: 'pulpo',
          descripcion:
            'el pulpo tiene simetría bilateral, con la boca y el pico situados en el punto central de sus ocho extremidades. Su cuerpo blando puede cambiar rápidamente de forma y textura, permitiendo que el animal se escurra a través de pequeños conductos o grietas. Arrastra sus ocho apéndices detrás de sí cuando nada; el sifón se utiliza tanto para respirar como para la locomoción, expulsando un chorro de agua.',
          foto: {
            src: '../../assets/dia/pulpo.jpg',
            alt: 'pulpo',
          },
        },
        {
          nombre: 'Ballena azul',
          descripcion:
            'es una especie de cetáceo misticeto de la familia Balaenopteridae. Su tamaño medio es de entre 24 y 27 metros de longitud y pesan entre 100 y 120 toneladas, aunque hay registros de ejemplares de más de 30 m de longitud y 170 t de peso, que lo convierten en el mayor animal del planeta Tierra, no solo en la actualidad sino también el mayor del que se tenga registro en la historia de la vida en la Tierra',
          foto: {
            src: '../../assets/dia/ballena.jpg',
            alt: 'pulpo',
          },
        },
      ],
    };

    this.tierranoc = {
      habitad: 'tierra',
      vive: [
        {
          nombre: 'Pantera nebulosa',
          descripcion:
            'La pantera nebulosa (Neofelis nebulosa) es un felino que vive en los bosques y las selvas de Asia y África y su nombre se debe a que cuenta con unas manchas en el manto. Estas le permiten camuflarse entre los árboles, donde habita (casi nunca desciende al suelo). Caza por las noches y sus presas favoritas son los pájaros, los roedores y los pequeños primates. Su habilidad es tal, que puede saltar de rama en rama sin ser percibido.',
          foto: {
            src: '../../assets/Noche/pantera.jpg',
            alt: 'delfin',
          },
        },
        {
          nombre: 'Boa de Tumbes',
          descripcion:
            'Esta constrictora que vive en la selva de Ecuador y Perú, tiene el cuerpo musculoso y trepa a los árboles donde duerme durante el día. también tiene hábitos diurnos, dado que es de sangre fría. Necesita darse “baños de sol” para que sus órganos funcionen',
          foto: {
            src: '../../assets/Noche/boa.jpg',
            alt: 'pulpo',
          },
        },
        {
          nombre: 'erizo',
          descripcion:
            ' son pequeños mamíferos cubiertos de púas y con un hocico puntiagudo. Todos ellos son insectívoros y poseen una longitud media de 24 centímetros, con 500 gramos de peso. De todas formas, las medidas varían entre ejemplares y especies. Son animales de hábitos crepusculares que aprovechan la noche para buscar insectos entre la hojarasca.',
          foto: {
            src: '../../assets/Noche/erizo.jpg',
            alt: 'pulpo',
          },
        },
        {
          nombre: 'mapache',
          descripcion:
            'Es un poco mayor y más grueso que un gato, de pelo medianamente largo y de color gris plateado (más oscuro en el centro del lomo), el pelo de las extremidades casi blanco, cola larga y anillada (gris plateado con blanco o casi blanco) y una característica mancha de pelo negro que va desde cada mejilla a cada ojo, lo que lo hace muy reconocible, pues parece como si llevara un antifaz.',
          foto: {
            src: '../../assets/Noche/mapache.jpg',
            alt: 'mapache',
          },
        },
      ],
    };

    this.airenoc = {
      habitad: 'aire',
      vive: [
        {
          nombre: 'Luciérnaga',
          descripcion:
            'Podría decirse que este animal nocturno (familia Lampyridae) es una excepción en cuanto a pasar desapercibido se refiere. Cuando oscurece, los machos vuelan emitiendo una luz ubicada en la parte posterior del cuerpo para poder aparearse. Las hembras no vuelan, pero también emiten luz. La luciérnaga es originaria de América y Asia, vive cerca de pantanos, junglas y manglares húmedos.',
          foto: {
            src: '../../assets/Noche/lucier.jpg',
            alt: 'luciernaga',
          },
        },
        {
          nombre: 'Buho',
          descripcion:
            'Estas aves habitan en casi todos los lugares del planeta. Son aves de rapiña. Estas aves son nocturnas, y pueden cazar en la oscuridad. Se caracterizan por especial cuidado a no hacer ni el más mínimo ruido al intentar agarrar su presa. Por ser aves nocturnas tienen muy desarrollada su parte visual y auditiva.',
          foto: {
            src: '../../assets/Noche/buho.jpg',
            alt: 'buho',
          },
        },
        {
          nombre: 'murcielago',
          descripcion:
            'Relacionamos al murciélago (Chiroptera) con la vida nocturna debido a que durante el día duerme cabeza abajo en una cueva o tronco de árbol. Sus sensibles ojos no le permiten ver cuando hay sol. Este pequeño mamífero come frutas, insectos o roedores pequeños, dependiendo de la especie. Se orienta en la oscuridad gracias a su chillido.',
          foto: {
            src: '../../assets/Noche/murci.jpg',
            alt: 'murcielago',
          },
        },
      ],
    };


    
    this.aguanoc = {
      habitad: 'agua',
      vive: [
        {
          nombre: 'pez gato',
          descripcion:
            'La mayor parte son carroñeros nocturnos y viven cerca del fondo, en aguas poco profundas. Los característicos tentáculos o barbillas del pez, que se extienden a cada lado de la mandíbula superior y, en algunas especies, también de la mandíbula inferior, semejantes a los bigotes de un gato, explican el nombre',
          foto: {
            src: '../../assets/Noche/bagre.jpeg',
            alt: 'pez gato',
          },
        },
        {
          nombre: 'Hypostomus',
          descripcion:
            'Es sin duda el chupa algas de mayor eficacia y reputación de la acuariofilia de agua dulce.Habita por lo general ríos y arroyos de poca profundidad dotados de cierta corriente y repletos de cantos rodados entre los que se asientan las algas.',
          foto: {
            src: '../../assets/Noche/comealga.jpg',
            alt: 'Hypostomus',
          },
        },
        {
          nombre: 'pez caldenal',
          descripcion:
            'está emparentado con las pirañas, aunque no tiene ni mucho menos su agresividad, Son peces de un temperamento vivo, activos nadadores, que gustan de espacios suficientes para moverse, no llega a medir más de cinco centímetros en su etapa adulta.     Poseen un cuerpo esbelto y ahusado, con unos ojos grandes ojos que cubren gran parte del espacio dedicado a la cabeza',
          foto: {
            src: '../../assets/Noche/cardenal.jfif',
            alt: 'pez caldenal',
          },
        },
      ],
    };



  }

  ngOnInit(): void {}

  public nocheDia = () => {
    if (this.nocturno === false) {
      this.nocturno = true;
      this.tema = 'DIURNO';
      this.visible = true;
    } else {
      this.nocturno = false;
      this.tema = 'NOCTURNO';
      this.visible = false;
    }
  };
}
