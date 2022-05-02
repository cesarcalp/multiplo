import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  vista_video!: Boolean;
  url_video!: String;
  sepador_azul!:String;
  sepador_naranja!:String;

  /* ********************* Simulador ************************* */
  valor: number = 6;
  minimo: number = 6;
  maximo: number = 24;
  salto: number = 6;

  inversion = 500;

  minimo_inv: number = 500;
  maximo_inv: number = 100000;
  salto_inv: number = 1;

  m_rendimiento_a!: string;
  m_porcentaje_rendimiento = "10%";

  bnco_porcentaje_rendimiento = "0.275%";
  bnco_porcentaje_rend = 0.275;
  autoTicks = false;
  disabled = false;
  invert = false;
  showTicks = false;
  thumbLabel = false;
  vertical = false;
  tickInterval = 1;


  /* ********** Calculos simulador ************ */
  porc_m = 0.10;
  plazo = 360;
  interes_multiplo: number = 0;
  valor_inicial!: number;
  interes_multiplo_inicial!: number;
  inicial_one!: number;
  inicial_two!: number;
  inicial_tree!: number;
  inversion_one!: number;
  inversion_two!: number;
  interes_banco!: number;
  inversion_bco!: string;
  total_m!: string;
  total_bco!: string;
  mensaje_err!: string;
  /* ****************************************** */

  constructor(private deviceDetectorService: DeviceDetectorService) { 
    this.interes_multiplo = ((this.inversion * this.porc_m * 30) / 360) * 6;
    this.m_rendimiento_a = this.interes_multiplo.toFixed(2);

    this.interes_banco = (((this.inversion * (this.bnco_porcentaje_rend / 100)) * 30) / 360) * this.valor;
    this.inversion_bco = this.interes_banco.toFixed(2);

    this.total_m = (this.inversion + this.interes_multiplo).toFixed(2);
    this.total_bco = (this.inversion + this.interes_banco).toFixed(2);
  }

  handleMinus() {
    if (this.valor > this.minimo) {
      this.valor = this.valor - 6;
      this.interes_m();
    }

  }
  handlePlus() {
    if (this.valor < this.maximo) {
      this.valor = this.valor + 6;
      this.interes_m();
    }
  }

  interes_m() {

    if (this.inversion > 499 && this.inversion <= 100000) {
      this.mensaje_err = ""
      switch (this.valor) {

        case 6:
          this.interes_multiplo = ((this.inversion * this.porc_m * 30) / 360) * this.valor;
          this.m_rendimiento_a = this.interes_multiplo.toFixed(2);
          break;
        case 12:
          this.interes_multiplo = ((this.inversion * this.porc_m * 30) / 360) * this.valor;
          this.m_rendimiento_a = this.interes_multiplo.toFixed(2);
          break;
        case 18:
          this.interes_multiplo_inicial = ((this.inversion * this.porc_m * 30) / 360) * 12;
          this.valor_inicial = this.inversion * .50;
          this.interes_multiplo = ((this.valor_inicial * this.porc_m * 30) / 360) * 6;

          this.m_rendimiento_a = (this.interes_multiplo_inicial + this.interes_multiplo).toFixed(2);
          this.interes_multiplo = this.interes_multiplo_inicial + this.interes_multiplo;
          break;
        case 24:
          this.inicial_one = ((this.inversion * this.porc_m * 30) / 360) * 12;
          this.inversion_one = this.inversion * .33;
          this.inicial_two = (((this.inversion - this.inversion_one) * this.porc_m * 30) / 360) * 6;
          this.inversion_two = this.inversion * .34;
          this.inicial_tree = ((this.inversion_two * this.porc_m * 30) / 360) * 6;
          this.interes_multiplo = this.inicial_one + this.inicial_two + this.inicial_tree;
          this.m_rendimiento_a = (this.inicial_one + this.inicial_two + this.inicial_tree).toFixed(2);
          break;

        default:
          console.log("No such day exists!");
          break;
      }


      this.interes_banco = (((this.inversion * (this.bnco_porcentaje_rend / 100)) * 30) / 360) * this.valor;
      this.inversion_bco = this.interes_banco.toFixed(2);
      this.total_m = (this.inversion + this.interes_multiplo).toFixed(2);
      this.total_bco = (this.inversion + this.interes_banco).toFixed(2);
      //alert(this.total_bco);
    }
    else {
      this.mensaje_err = "El monto mínimo de inversión es a partir de $500";
    }

    if (this.inversion > 100000) {
      this.mensaje_err = "El monto máximo de inversión es de $100,000";
    }

  }

  /* ********************************************** */
  interes_m2() {
    this.interes_m();
  }
  
  ngOnInit(): void {
    this.sepador_naranja ="/assets/landing/separador2.png";
    this.url_video = "/assets/video/home.mp4";
    this.vista_video = true;
    if (this.deviceDetectorService.isMobile()) {
      this.vista_video = false;
      this.url_video = "/assets/video/home_mobile.mp4";
    }
    else {
      this.url_video = "/assets/video/home.mp4";
      this.sepador_azul = "/assets/landing/separador1.png";
    }

  }

}
