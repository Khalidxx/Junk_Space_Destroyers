import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  Loading,
  ToastController,
  Platform,
  LoadingController
} from "ionic-angular";
import { FileTransfer } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { EmotionStore } from "../../stores";

declare var cordova: any;
@IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  public base64Image: string;
  lastImage: string = null;
  loading: Loading;
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    public store: EmotionStore,
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private transfer: FileTransfer,
    private file: File
  ) {}

  scanQr() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
        const merchant = {
          key: 1,
          name: "中国江湖菜",
          styles: ["中国菜"],
          specials: ["饺子", "面条"],
          rate: 4.7,
          approximateDeliveryTime: 30,
          averageOrderPerMonth: 15,
          distance: 1.4,
          logoLink:
            "https://lh3.googleusercontent.com/LiI75pRAc0_UsSe7qPkwtdebTusyHnFXzHOYh21clPhpOKMc2tiO1d8CY38RGf4t-3lkcS-XWotmXC4_w_9ivMM9ZaZkMhloBBMa9b8=s1024-c",
          isHalal: true,
          isPorkFree: false,
          startPrice: 20,
          profileImageLink:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiUkJ3W0tveAhXRTn0KHQZAAygQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thehotel-brussels.be%2Fen%2Fthe-restaurant-by-pierre-balthazar.html&psig=AOvVaw2UjbydUvxvkL_i6Z6a5QxY&ust=1542551602045335"
        };
        this.navCtrl.push("MerchantPage", {
          merchant
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      // destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      // encodingType: this.camera.EncodingType.JPEG,
      // mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1,
      targetWidth: 900,
      targetHeight: 600,
      saveToPhotoAlbum: false,
      // allowEdit: true,
      correctOrientation: true
    };
    this.camera
      .getPicture(options)
      .then(
        imagePath => {
          var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);
          this.copyFileToLocalDir(
            correctPath,
            currentName,
            this.createFileName()
          );
        },
        err => {
          this.presentToast("Error while selecting image.");
        }
      )
      .then(() => {
        this.uploadImage();
      });
  }
  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file
      .copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName)
      .then(
        success => {
          this.lastImage = newFileName;
        },
        error => {
          this.presentToast("Error while storing file.");
        }
      );
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

  public pathForImage(img) {
    if (img === null) {
      return "";
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  public uploadImage() {
    // Destination URL
    var url = "https://face.recoqnitics.com/analyze";

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "filename",
      fileName: filename,
      chunkedMode: false,
      httpMethod: "POST",
      mimeType: "multipart/form-data",
      params: {
        access_key: "7938ae3c920190ecf3f1",
        secret_key: "de2eb7ee09267b5981a74a0e4e90500c10dfe577"
      }
    };

    const fileTransfer = this.transfer.create();

    this.loading = this.loadingCtrl.create({
      content: "Uploading..."
    });
    this.loading.present();

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(
      data => {
        this.loading.dismissAll();
        let res = data.response;
        let resJson = JSON.parse(res);
        this.store.changeEmotion(resJson.faces[0].emotions);
        console.log(resJson);
        this.presentToast("Image succesful uploaded.");
      },
      err => {
        this.loading.dismissAll();
        console.log(err);
        this.presentToast("Error while uploading file.");
      }
    );
  }
}
