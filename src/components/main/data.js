import {
  wd,
  wd_1506,
  wd_1508,
  wd_t80,
  wd_p80,
  wd_678x,
  TSC,
  wd_619,
  cashDrawer_420,
  cash_410,
  godex,
  bluetoothPrinter,
} from "../../images";

export const data = [
  {
    id: 1,
    description: [
      { title: "Motherboard", detail: "Intel®J1900 Industrial" },
      { title: "CPU", detail: "Intel® Celeron®J1900-2M Cache, up to 2.42 GHz" },
      { title: "Memory", detail: "2GB DDR-III 1333(Optional 4GB)" },
      {
        title: "Hard Disk",
        detail: "32G mSATA SSD (Optional 2.5inch HGST 500G HDD)",
      },
      { title: "Monitor", detail: "15' Mitsubishi LED （1024x768）" },
      {
        title: "Touch Screen",
        detail: "5 wire resistive touch screen",
      },
      {
        title: "IO",
        detail: "LPT*1 COM*2 USB*4 LAN*1 RJ11*1 KB*1 DC12V*1 Audio*1",
      },
      { title: "Display", detail: "Optional LED8E or VFD220E" },
      { title: "Power Supply", detail: "External 12V-5A Adapter" },
    ],
    image: wd,
    name: "WD-1502 15 inch touch screen POS system",
  },
  {
    id: 2,
    description: [
      { title: "Motherboard", detail: "Intel® J1800 (Brand: Foxconn)" },
      { title: "Type", detail: "Touch Pos System (Windows/Linux)" },
      {
        title: "CPU",
        detail: "Intel® Celeron® J1800-2.4 GHz Dual core Dual thread",
      },
      {
        title: "IO",
        detail: "LPT*1 COM*2 USB*4 LAN*1 RJ11*1 KB*1 DC12V*1 Audio*1",
      },
      {
        title: "Monitor",
        detail: "15.6” LED 1366x768   Original Capacitive screen",
      },
      {
        title: "Hard Disk",
        detail: "SSD 64GB (Brand SATA A3)",
      },
    ],
    image: wd_1506,
    name: "WD-1506 metal all in one touch pos system",
  },
  {
    id: 3,
    description: [
      { title: "Motherboard", detail: "Intel® J1900 (Brand: Foxconn)" },
      { title: "Type", detail: "Touch Pos System (Windows/Linux)" },
      {
        title: "CPU",
        detail: "Intel® Celeron® J1900-4 cores 4 threads",
      },
      {
        title: "Memory",
        detail: "4GB DDR-III",
      },
      {
        title: "IO",
        detail: "LPT*1 COM*2 USB*4 LAN*1 RJ11*1 KB*1 DC12V*1 Audio*1",
      },
      {
        title: "Monitor",
        detail: "15.6” LED 1366x768   Original Capacitive screen",
      },
      {
        title: "Hard Disk",
        detail: "SSD 64GB (Brand SATA A3)",
      },
    ],
    image: wd_1508,
    name: "WD-1508 full metal body touch pos system",
  },
  {
    id: 4,
    description: [
      {
        title: "Details",
        detail:
          "WD-T80 is a high speed thermal receipt printer created for 24/7 operations for limited operating time applications, especially retail stores and Fast Food applications. With the Low-noise mechanism, It can perform long-time printing and reduce the noise to the minimum.Multi I/O Interface, Easy maintenance and fascinating high-speed performance, WD-T80 is the best choice of high-quality demand solutions.",
      },
    ],
    image: wd_t80,
    name: "WD-T80 80mm thermal receipt printer",
  },
  {
    id: 5,
    description: [
      {
        title: "Print command",
        detail: "compatible with ESC/POS/OPOS",
      },
      {
        title: "Print Diameter ",
        detail: "80mm",
      },
      {
        title: "Resolution",
        detail: "203DPI",
      },
      {
        title: "Bar code type",
        detail:
          "UPC-A/UPC-E/JAN13(EAN13) /JAN8(EAN8)CODABAR/ITF/CODE39/COD E93/CODE128, 2D Bar Codes",
      },
      {
        title: "Dimension",
        detail: "195×145×147mm(LxWxH )",
      },
      {
        title: "Interfaces",
        detail: "USB+LAN+RS232",
      },
      {
        title: "Print Speed",
        detail: "250mm/second",
      },
    ],
    image: wd_p80,
    name: "WD-P80 Desktop 80mm thermal printer",
  },
  {
    id: 6,
    description: [
      {
        title: "Type",
        detail: "COMS",
      },
      {
        title: "1D bar codes",
        detail: "Support",
      },
      {
        title: "2D codes",
        detail: "Support",
      },
      {
        title: "Scan from mobile phone screen",
        detail: "Support",
      },
      {
        title: "Scan from computer screen",
        detail: "Support",
      },
      {
        title: "Data transfer type",
        detail: "Wire transmission",
      },
      {
        title: "Interface",
        detail: "USB",
      },
      {
        title: "Cable length",
        detail: "1.8m",
      },
      {
        title: "Scan Speed",
        detail: "200 times/second",
      },
      {
        title: "Weight",
        detail: "290g",
      },
    ],
    image: wd_678x,
    name: "WD-678X 2D wired handheld barcode scanner",
  },
  {
    id: 7,
    description: [
      {
        title: "Ribbon",
        detail: "600 meter long, 1 inch core(ink coated outside or inside)",
      },
      {
        title: "Ribbon width",
        detail: "25.4mm-114.3mm(1'-4.5')",
      },
      {
        title: "Processor",
        detail: "32-bit RISC CPU",
      },
      {
        title: "Memory",
        detail: "2MB FLASH memory    2MB SDRAM",
      },
      {
        title: "Interface",
        detail:
          "Standard RS-232(max.19,200bps)  USB 1.1 or Centronics(factory o)",
      },
      {
        title: "Power",
        detail: "AC input:100-240V universal switching power supply ",
      },
      {
        title: "Operation switch, button",
        detail: "One power switch  Feed button and Pause button",
      },
      {
        title: "Sensors",
        detail: "Transmissive sensor, Reflective sensor, Ribbon end sensor",
      },
      {
        title: "Internal font",
        detail:
          "8 alpha-numeric bitmap fonts, one true type font-CG triumvirate ",
      },
      {
        title: "Bar code",
        detail:
          "1D bar code: Code39, Code 39C, Code 93,Code 128UCC,Code 128 subset A, B , C , Codabar, Interleave 2 of 5,EAN-8,EAN-13,EAN-128,UPC-A,UPC-E, EAN and UPC 2(5) digits add-on, MSI,PLESSEY,POSTINET, China Post, ITF14, EAN 14 2D bar code: PDF-417,Maxicode, DataMartix, QR Code",
      },
      {
        title: "Font& barcode rotation",
        detail: "0, 90, 180, 270 degrees",
      },
    ],
    image: TSC,
    name: "TSC244 PRO",
  },
  {
    id: 8,
    description: [
      {
        title: "Product name",
        detail: "Handheld 1D Laser Barcode Reader",
      },
      {
        title: "Model No.",
        detail: "WD-619",
      },
      {
        title: "Material",
        detail: "ABS+PC",
      },
      {
        title: "Size",
        detail: "L*W*H:175mm*66mm*77mm",
      },
      {
        title: "Operating current",
        detail: "50mA(operating mode);30mA(standby);100mA(maximum peak)",
      },
      {
        title: "Quiescent current",
        detail: "20mA",
      },
      {
        title: "Weight",
        detail: "146g",
      },
      {
        title: "Interface",
        detail: "USB,RS232,PS/2",
      },
      {
        title: "Baud rate",
        detail: "RS232 baudrate: 1200-115200",
      },
      {
        title: "Light source",
        detail: "Visible laser 650nm",
      },
      {
        title: "Trigger mode",
        detail: "Manual, Automatic induction, Continuous scanning",
      },
      {
        title: "Decoding speed",
        detail: "300times/sec",
      },
      {
        title: "IP Grade",
        detail: "IP 54",
      },
    ],
    image: wd_619,
    name: "WD-619 1D wired laser barcode scanner",
  },
  {
    id: 9,
    description: [
      {
        title: "Dimensions",
        detail: "405(W)x 430(D)x 100(H) mm",
      },
      {
        title: "Weight",
        detail: "5kg",
      },
      {
        title: "Storage space",
        detail: "7 Banknote/3 coin",
      },
      {
        title: "Check slot",
        detail: "Single check slot",
      },
      {
        title: "Banknote holder",
        detail: "Metallic",
      },
      {
        title: "Interface",
        detail: "RJ11( RJ12 Optional)",
      },
      {
        title: "Storage box",
        detail: "one",
      },
      {
        title: "Lock",
        detail: "Third gear safety lock",
      },
    ],
    image: cashDrawer_420,
    name: "WD-420 cash drawer",
  },
  {
    id: 10,
    description: [
      {
        title: "Dimensions",
        detail: "*410(W) x 420(D) x 100(H) mm 16.1(W) x 16.5(D) x3.9(H) inch",
      },
      {
        title: "Cash tray",
        detail: "355(W) x 326(D) x 60(H) mm",
      },
      {
        title: "Weight",
        detail: "7.6kg",
      },
    ],
    image: cash_410,
    name: "WD-410C Metal cash drawer",
  },
  {
    id: 11,
    description: [
      {
        title: "Print Method",
        detail: "Thermal Transfer / Direct Thermal",
      },
      {
        title: "Resolution",
        detail: "203 dpi (8 dots/mm)",
      },
      {
        title: "Print Speed",
        detail: "5IPS (127 mm/s)",
      },
      {
        title: "Print Width",
        detail: "4.25 (108 mm)",
      },
      {
        title: "Processor",
        detail: "32 Bit RISC CPU",
      },
      {
        title: "Memory",
        detail: "8MB Flash (4MB for user storage) / 16MB SDRAM",
      },
      {
        title: "Sensor Type",
        detail:
          "Adjustable reflective sensor. Fixed transmissive sensor, central aligned",
      },
      {
        title: "Media",
        detail:
          "Types: Continuous form, gap labels, black mark sensing, and punched hole; label length set by auto sensing or programming Width: 1' (25.4 mm) Min. - 4.64' (118 mm) Max. Thickness: 0.0024” (0.06 mm) Min. - 0.01” (0.25 mm) Max. Label roll diameter: Max. 5” (127 mm) Core diameter: 1', 1.5', 3' (25.4 mm, 38.1 mm, 76.2 mm)",
      },
      {
        title: "Graphics",
        detail:
          "Resident graphic file types are BMP and PCX, other graphic formats are downloadable from the software",
      },
      {
        title: "Interfaces",
        detail:
          "USB, USB + Parallel Port (Optional), USB + Serial Port + Ethernet (Optional)",
      },
      {
        title: "Power",
        detail: "Auto Switching 100-240VAC, 50-60Hz",
      },
      {
        title: "Dimension",
        detail:
          "Length: 11.2” (285 mm), Height: 6.8” (171 mm), Width: 8.9” (226 mm)",
      },
    ],
    image: godex,
    name: "Godex G500",
  },
  {
    id: 12,
    description: [
      {
        title: "Model",
        detail: "WD-58GM",
      },
      {
        title: "Compatibility",
        detail: "Android and IOS operating sytems",
      },
      {
        title: "Print speed",
        detail: "70mm/sec",
      },
      {
        title: "Reliability TPH Life",
        detail: "100km",
      },
      {
        title: "Resolution",
        detail: "203DPI (8dot/mm)",
      },
      {
        title: "Paper Type",
        detail: "Thermal Paper",
      },
      {
        title: "Battery",
        detail: "Lithium: 7.4VDC/1500mA",
      },
    ],
    image: bluetoothPrinter,
    name: "WD-58GM 58mm mini bluetooth portable printer",
  },
];
