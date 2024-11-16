import {Component} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any[] = [
    {
      "ItemID": "10423",
      "ItemNumber": "AS3-DS12-1101",
      "ItemName": "X-AM 2500 4-Gas Detector inCase Calibration Kit w/ 34L Calibration Gas",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Single Meter Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1965",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/DSC_0580.png",
      "LongDescription1": "<p>\nThis X-AM 2500 single meter kit is equipped with a Draeger X-am 2500 for O2/LEL/CO/H2S  and includes pass-thru charging, a 34L cylinder of O2/LEL/CO/H2S calibration gas, a demand flow regulator, attachable sample pump, and supporting accessories.\n</p>\n<p><strong>Features:</strong>\n</p>\n<ul>\n <li>inCase Charging: pass-thru charging port to charge directly through case</li>\n <li>inCase Calibration: 34L cylinder with demand flow regulator</li>\n <li>inCase Storage: Pelican case with custom foam and lid organizer to store tubing, charger, manual, product CD, and accessories</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/single-meter-kit-for-x-am-2500-o2-lel-co-h2s.aspx"
    },
    {
      "ItemID": "10424",
      "ItemNumber": "AS3-RM4M-4201",
      "ItemName": "4-Meter inCase Calibration Kit for RAE MultiRAE Lite",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Multi-Unit Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "9105",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/RM4M-multirae-lite-incase-calibration.png",
      "LongDescription1": "<p>This MultiRAE Lite multi-unit gas detection kit with inCase Calibration is equipped with four RAE Systems MultiRAE Lites configured O2/LEL/CO+H2S/10.6ev PID. The kit includes two 66L reusable Ecosmart cylinders of calibration gas (O2/LEL/CO/H2S and 100ppm Isobutylene), two demand flow regulators, and supporting accessories.</p>\n<p><strong>Features:</strong>\n</p>\n<ul>\n <li>inCase Charging: pass-thru charging port to charge directly through case</li>\n <li>inCase Calibration: pass-thru calibration with two 66L Ecosmart cylinders and two demand flow regulators</li>\n <li>inCase Storage: Pelican case with lid organizer for tubing, manual, charger, software, and PC cable </li>\n <li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/4-meter-kit-for-multirae-lite-o2-lel-co-h2s-pid.aspx"
    },
    {
      "ItemID": "10425",
      "ItemNumber": "AS3-DM52-5101",
      "ItemName": "5-Meter inCase Calibration Kit for Draeger X-AM 2500",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Multi-Unit Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "5730",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/DM50-draeger-multi-meter-kit.png",
      "LongDescription1": "<p>\n This multi-unit kit for X-am 2500 is equipped with five Drager X-AM 2500s configured O2/LEL/CO/H2S. The kit includes attachable sample pump, one 66L Ecosmart cylinder of O2/LEL/CO/H2S calibration gas, a demand flow regulator, and supporting accessories.</p><p><strong>Features:</strong></p><ul>\n <li>inCase Charging: pass-thru charging port to charge directly through case</li>\n <li>inCase Calibration: 66L Ecosmart cylinder with demand flow regulator</li>\n  <li>inCase Storage: Pelican case with lid organizer for tubing, manual, and charger</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/5-meter-kit-for-x-am-2500-o2-lel-co-h2s.aspx"
    },
    {
      "ItemID": "10426",
      "ItemNumber": "AS3-KM55-5102",
      "ItemName": "5-Meter inCase Calibration Kit for RKI GX-2009",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Multi-Unit Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "4392",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/KM50-rki-multi-meter-kit.png",
      "LongDescription1": "<p>This multi-unit kit for GX-2009 is equipped with five RKI GX-2009s configured O2/LEL/CO/H2S. The kit includes an attachable sample pump, one 66L Ecosmart cylinder of O2/LEL/CO/H2S calibration gas, a demand flow regulator, and supporting accessories.</p><p><strong>Features:</strong></p><ul>\n <li>inCase Charging: pass-thru charging port to charge directly through case</li>\n <li>inCase Calibration: 66L Ecosmart cylinder with demand flow regulator</li>\n  <li>inCase Storage: Pelican case with lid organizer to store tubing, manual, product CD, and charger</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/5-meter-kit-for-gx-2009-o2-lel-co-h2s.aspx"
    },
    {
      "ItemID": "10427",
      "ItemNumber": "AS3-RC4M-3201",
      "ItemName": "3-Meter AutoRAE 2 Cradle inCase Calibration Kit for RAE MultiRAE Lite",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "8438",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "https://www.allsafeindustries.com/Shared/Images/Product/3-Meter-AutoRAE-2-Cradle-inCase-Calibration-Kit-for-RAE-MultiRAE-Lite/AS3-RC4M-3201.jpg",
      "LongDescription1": "<p>This calibration station kit is equipped with a standalone AutoRAE 2 cradle and three MultiRAE Lites configured O2/LEL/CO+H2S/10.6ev PID. The kit includes one 66L Ecosmart cylinder of O2/LEL/CO/H2S calibration gas, one 66L Ecosmart cylinder of Isobutylene, two demand flow regulators, and supporting accessories.</p><p><strong>Features:</strong>\n</p><ul>\n <li>inCase Charging: pass-thru charging port to power AutoRAE 2 cradle and charge meters directly through case</li>\n <li>inCase Calibration: AutoRAE 2 standalone cradle system two 66L Ecosmart reuseable cylinders and demand flow regulators</li>\n <li>inCase Storage: Pelican case with custom foam and lid organizer with 15' tubing for each meter, manual, charger, software, and PC cable</li>\n <li>Optional wireless capability</li>\n</ul>\n",
      "CustomUrl": "https://www.allsafeindustries.com/3-meter-autorae-2-cradle-kit-for-multirae-lite-o2-lel-co-h2s-10-6-pid.aspx"
    },
    {
      "ItemID": "10428",
      "ItemNumber": "AS3-RC3Q-3101",
      "ItemName": "3-Meter AutoRAE 2 Controller inCase Calibration Kit for RAE QRAE 3",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "9189",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/RC30-rae-cal-stn-kit.png",
      "LongDescription1": "<p>This AutoRAE 2 inCase Calibration Kit is equipped with an AutoRAE 2 Controller and three QRAE three cradles. The kit includes three QRAE 3 gas meters for O2/LEL/CO+H2S/10.6ev PID, one 66L Ecosmart cylinder of O2/LEL/CO/H2S calibration gas, a demand flow regulator, and supporting accessories.\n</p><p class=\"bold\">Features:\n</p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: AutoRAE 2 Controller system with three QRAE 3 cradles and 66L Ecosmart reuseable cylinder with demand flow regulator</li>\n\t<li>inCase Storage: Storm case with custom foam and lid organizer with 15' tubing for each meter, manual, charger, software, and PC cable</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/3-meter-autorae-2-controller-kit-for-qrae-3-o2-lel-co-h2s.aspx"
    },
    {
      "ItemID": "10429",
      "ItemNumber": "AS3-RC3M-32",
      "ItemName": "3-Meter AutoRAE 2 Controller inCase Calibration Kit for RAE MultiRAE",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "12928",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/RC30-rae-cal-stn-kit.png",
      "LongDescription1": "<p>\n\tThis AutoRAE 2 inCase Calibration Kit is equipped with an AutoRAE 2 Controller and three MultiRAE cradles. The kit includes a choice of three MultiRAE Lites, MultiRAEs, or MultiRAE Pros configured for O2/LEL/CO+H2S/10.6ev PID along with one 66L Ecosmart cylinder of O2/LEL/CO/H2S calibration gas, one 66L Ecosmart cylinder of Isobutylene, two demand flow regulators, and supporting accessories.\n</p>\n<p><strong>Features:</strong>\n</p>\n<ul>\n\t<li>inCase Charging: pass-thru charging port to power AutoRAE 2 system and charge meters directly through case</li>\n\t<li>inCase Calibration: AutoRAE 2 Controller system with three MultiRAE cradles and two 66L Ecosmart reuseable cylinder with demand flow regulators</li>\n\t<li>inCase Storage: Storm case with custom foam and lid organizer with 15' tubing for each meter, manual, charger, software, and PC cable</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/3-meter-autorae-2-controller-kit-for-multirae-family-o2-lel-co-h2s-pid.aspx"
    },
    {
      "ItemID": "10430",
      "ItemNumber": "AS3-DC3X-3101",
      "ItemName": "3-Meter X-Dock Controller inCase Calibration  Kit for Draeger X-AM 2500",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "10292",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/DSC_0573.png",
      "LongDescription1": "<p>This X-Dock Kit with inCase Calibration is outfitted with a 6300 X-Dock controller and three cradles for the X-AM 2500. The kit includes three X-AM 2500s configured O2/LEL/CO/H2S, one 66L Ecosmart cylinder of O2/LEL/CO/H2S calibration gas, one pressure regulator, and supporting accessories.\n</p>\n\n<strong>Features:</strong>\n<ul>\n  <li>inCase Charging: pass-thru charging port to power X-Dock system directly through case</li>\n  <li>X-dock system with three X-am 2500 cradles and 66L Ecosmart reuseable cylinder with demand flow regulator</li>\n  <li>inCase Storage: Storm case with custom foam</li>",
      "CustomUrl": "https://www.allsafeindustries.com/3-meter-x-dock-controller-kit-for-draeger-x-am-2500.aspx"
    },
    {
      "ItemID": "10431",
      "ItemNumber": "AS3-KC55-5102",
      "ItemName": "5-Meter Calibration Station inCase Calibration Kit for RKI GX-2009",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "6188",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/DSC_0524.png",
      "LongDescription1": "<p>GX-2009 calibration station gas detection kit with inCase Calibration for RKI. Kit includes calibration station, 5 GX-2009s (O2/LEL/CO/H2S), 1 cylinder of Quad Mix for RKI Meters (50% LEL Methane, 50ppm CO, 25ppm H2S, 12% O2, N2 Balance Contained in a 116L EcoSmart Reusable Cylinder, 1 demand flow regulator, 1 sample pump, and supporting accessories.</p>",
      "CustomUrl": "https://www.allsafeindustries.com/5-meter-calibration-station-kit-for-rki-gx-2009.aspx"
    },
    {
      "ItemID": "10432",
      "ItemNumber": "AS3-RC4Q-3116",
      "ItemName": "3-Meter AutoRAE 2 Cradle inCase Calibration Kit for RAE QRAE 3",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "4375",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/incase-kits-qrae3-calibration.jpg",
      "LongDescription1": "<p>This calibration station kit is equipped with a standalone AutoRAE 2 cradle and three QRAE 3 gas meters configured O2/LEL/CO/H2S. The kit includes one 66L Ecosmart cylinder of O2/LEL/CO/H2S calibration gas, a demand flow regulator, and supporting accessories.\n</p><p class=\"bold\">Features:\n</p><ul>\n\t<li>inCase Charging: pass-thru charging port to power AutoRAE 2 cradle and charge meters directly through case</li>\n\t<li>inCase Calibration: AutoRAE 2 standalone cradle system, one 66L Ecosmart reuseable cylinder and demand flow regulator</li>\n\t<li>inCase Storage: Pelican case with custom foam and lid organizer with 15' tubing for each meter, manual, charger, software, and PC cable</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/3-meter-autorae-2-cradle-kit-for-qrae-3-o2-lel-co-h2s.aspx"
    },
    {
      "ItemID": "10433",
      "ItemNumber": "AS3-RC4T-3109",
      "ItemName": "3-Meter AutoRAE 2 Cradle inCase Calibration Kit for RAE ToxiRae Pro PID",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Single Gas Monitors",
      "BasePrice": "6895",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/incase-kits-toxirae-calibration.jpg",
      "LongDescription1": "<p>This AutoRAE 2 inCase Calibration Kit is equipped with a standalone AutoRAE 2 cradle for ToxiRAE Pro PID. The kit includes three ToxiRAE Pro PID gas meters, one 66L Ecosmart cylinder of 100ppm Isobutylene calibration gas, a demand flow regulator, and supporting accessories.<br>\n</p>\n<p class=\"bold\">Features:\n</p>\n<ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: standalone AutoRAE 2 cradle and 66L Ecosmart reuseable cylinder with demand flow regulator</li>\n\t<li>inCase Storage: Pelican case with custom foam and lid organizer for accessories</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/3-meter-autorae-2-cradle-kit-for-toxirae-pro-pid.aspx"
    },
    {
      "ItemID": "10435",
      "ItemNumber": "AS3-RC0M",
      "ItemName": "Single AutoRAE 2 Cradle inCase Calibration Kit for RAE MultiRAE Family",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1776",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/resize/Shared/as3-rc0m.jpg",
      "LongDescription1": "<p>The RC0M kit combines the capability of the AutoRAE 2 calibration cradle with the convenience of inCase Calibration. The kit is available in either a cradle-only configuration or with one meter from the MultiRAE family. The kit only option includes one AutoRAE 2 cradle for MultiRAE (pumped) with space for up to two cylinders of calibration gas and demand flow regulators. Kits sold with meter include a meter from the MultiRAE family, two cylinders of calibration gas, two demand flow regulators.\n</p>\n<p><strong>Features:</strong>\n</p>\n<ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: AutoRAE 2 standalone cradle for MultiRAE</li>\n\t<li>inCase Storage: Pelican case with custom foam with 15' tubing, manual, charger, software, and PC cable</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/single-autorae-2-cradle-kit-for-multirae-family.aspx"
    },
    {
      "ItemID": "10436",
      "ItemNumber": "AS3-RC4T",
      "ItemName": "3-Meter AutoRAE 2 Cradle inCase Calibration Kit for RAE ToxiRae Pro",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Single Gas Monitors",
      "BasePrice": "3097",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/incase-kits-toxirae-calibration.jpg",
      "LongDescription1": "<p>This AutoRAE 2 inCase Calibration Kit is equipped with a standalone AutoRAE 2 cradle for ToxiRAE Pro. The kit includes three ToxiRAE Pro gas meters configured for CO, one 66L Ecosmart cylinder of 50ppm Carbon Monoxide calibration gas, demand flow regulator, and supporting accessories.<br>\n</p><p class=\"bold\">Features:\n</p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: standalone AutoRAE 2 cradle and 66L Ecosmart reuseable cylinder with demand flow regulator</li>\n\t<li>inCase Storage: Pelican case with custom foam and lid organizer for accessories</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/3-meter-autorae-2-cradle-kit-for-toxirae-pro.aspx"
    },
    {
      "ItemID": "10438",
      "ItemNumber": "AS3-KS15-1134",
      "ItemName": "GX-2009 4-Gas Detector inCase Calibration Kit w/ 34L Calibration Gas",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Single Meter Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1595",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/gx-2009-kit-incase-calibration.jpg",
      "LongDescription1": "<p>This GX-2009 single meter kit is equipped with a GX-2009 (O2/LEL/CO/H2S) and includes pass-thru charging, a 34L of O2/LEL/CO/H2S calibration gas, a demand flow regulator, attachable sample pump, and supporting accessories.\n</p>\n<p><strong>Features:</strong>\n</p>\n<ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: 34L cylinder with demand flow regulator</li>\n\t<li>inCase Storage: hard case with custom foam and cutouts for 15' tubing, manual, product CD, and charger</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/single-meter-kit-for-gx-2009-o2-lel-co-h2s-w-pump.aspx"
    },
    {
      "ItemID": "10439",
      "ItemNumber": "AS3-KC01-1134",
      "ItemName": "GX-2009 4-Gas Detector inCase Calibration Kit w/ SDM Calibration Station",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1795",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "http://incasecalibration.com/Shared/AS3-KC01.jpg",
      "LongDescription1": "<p></p><p>The KC01 kit conveniently packages the RKI SDM calibration station in a ready-to-deploy gas detection system with inCase Calibration. The kit comes equipped equipped with a GX-2009 configured O2/LEL/CO/H2S, 34L calibration gas, RP-2009 pump, and demand flow regulator. </p><p><strong>Features:</strong>\n</p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: SDM standalone calibration cradle for GX-2009</li>\n\t<li>inCase Storage: Pelican case with custom foam with 15' tubing, manual, and charger.</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/single-sdm-cal-station-kit-for-gx-2009.aspx"
    },
    {
      "ItemID": "10472",
      "ItemNumber": "AS3-RS1Q",
      "ItemName": "QRAE 3 4-Gas Detector inCase Calibration Kit",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Single Meter Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1295",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "https://www.allsafeindustries.com/Shared/incase-calibration/AS3-RS1Q-1101-qrae3-kit.jpg",
      "LongDescription1": "<p></p><p>This QRAE 3 single meter kit is equipped with a pumped RAE Systems QRAE 3 (O2/LEL/CO/H2S) and includes pass-thru charging, a cylinder of O2/LEL/CO/H2S calibration gas, a demand flow regulator, and supporting accessories.\n</p><p><strong>Features:</strong></p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: 20L or 34L calibration cylinder with demand flow regulator</li>\n\t<li>inCase Storage: 1400 or 1485 Pelican Air hard case with custom foam and cutouts for 15' tubing, manual, charger, software, and PC cable</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/qrae-3-4-gas-detector-kit-calibration-gas.aspx"
    },
    {
      "ItemID": "10473",
      "ItemNumber": "AS3-KS15-1101",
      "ItemName": "GX-2009 4-Gas Detector inCase Calibration Kit w/ 20L Calibration Gas",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Single Meter Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1682",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "https://www.allsafeindustries.com/Shared/incase-calibration/AS3-KS1Q-1101-gx-2009-kit.jpg",
      "LongDescription1": "<p></p><p>This GX-2009 single meter kit is equipped with a GX-2009 (O2/LEL/CO/H2S) and includes pass-thru charging, a 20L of O2/LEL/CO/H2S calibration gas, a demand flow regulator, attachable sample pump, and supporting accessories.\n</p><p><strong>Features:</strong>\n</p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: 20L cylinder with demand flow regulator</li>\n\t<li>inCase Storage: hard case with custom foam and cutouts for 15' tubing, manual, product CD, and charger</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/gx-2009-4-gas-detector-kit-20l-calibration-gas.aspx"
    },
    {
      "ItemID": "10474",
      "ItemNumber": "AS3-WS1X-1101",
      "ItemName": "GasAlertMax XT II 4-Gas Detector inCase Calibration Kit w/ 20L Calibration Gas",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Single Meter Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1369",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "https://www.allsafeindustries.com/Shared/incase-calibration/AS3-WS1X-1101.jpg",
      "LongDescription1": "<p></p><p>This BW GasAlertMax XT II single meter kit is equipped with a pumped gas meter configured for O2/LEL/CO/H2S. The inCase Calibration kit includes pass-thru charging, a 20L cylinder of calibration gas, a demand flow regulator, and supporting accessories.\n</p><p><strong>Features:</strong></p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: 20L cylinder with demand flow regulator</li>\n\t<li>inCase Storage: 1485 Pelican Air hard case with custom foam and cutouts for accessories, including 15' tubing, manual, and charger</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/bw-gasalertmax-xt-ii-4-gas-detector-kit-20l-calibration-gas.aspx"
    },
    {
      "ItemID": "10476",
      "ItemNumber": "AS3-RC0Q",
      "ItemName": "QRAE 3 inCase Calibration Gas Detector Kit w/ AutoRAE 2",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Calibration Station Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "1366",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "https://www.allsafeindustries.com/Shared/incase-calibration/AS3-RC0Q.jpg",
      "LongDescription1": "<p></p><p>The RC0Q kit combines the capability of the RAE Systems AutoRAE 2 calibration cradle with the convenience of inCase Calibration. The kit is available in either a cradle-only configuration or with one QRAE 3. The kit only option includes one AutoRAE 2 cradle for QRAE 3 with space for up to two cylinders of calibration gas. The kit is also available fully equipped with a QRAE 3, calibration gas, and demand flow regulator.</p><p><strong>Features:</strong>\n</p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: AutoRAE 2 standalone cradle for QRAE 3</li>\n\t<li>inCase Storage: Pelican case with custom foam with 15' tubing, manual, charger, software, and PC cable</li>\n\t<li>Optional wireless capability</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/qrae-3-gas-detector-kit-w/-autorae-2.aspx"
    },
    {
      "ItemID": "10477",
      "ItemNumber": "AS3-WS25-1233",
      "ItemName": "GasAlert Micro 5 PID Gas Detector inCase Calibration Kit",
      "CategoryList": "Detection > Gas Detection > Gas Detection Kits > Single Meter Kits|Detection > Gas Detection > Multi Gas Monitors",
      "BasePrice": "2575",
      "Manufacturer": "inCase Calibration by All Safe Industries",
      "ItemPrimaryImageUrl": "https://www.allsafeindustries.com/Shared/incase-calibration/AS3-WS25-1233.jpg",
      "LongDescription1": "<p></p><p>This single meter kit for the BW GasAlert Micro 5 PID is equipped with a pumped gas meter and is configured for O2/LEL/CO/H2S/PID. The inCase Calibration kit includes pass-thru charging, two 20L cylinders of calibration gas, a demand flow regulator, and supporting accessories.\n</p><p><strong>Features:</strong></p><ul>\n\t<li>inCase Charging: pass-thru charging port to charge directly through case</li>\n\t<li>inCase Calibration: two 20L cylinders, each with a demand flow regulator</li>\n\t<li>inCase Storage: 1485 Pelican Air hard case with custom foam and cutouts for accessories, including 15' tubing, manual, and charger</li>\n</ul>",
      "CustomUrl": "https://www.allsafeindustries.com/gasalert-micro-5-pid-gas-detector-incase-calibration-kit-with-calibration-gas.aspx"
    }
  ];
}
