import { AuthController } from './controllers/AuthController.js';
import { PokeDexController } from "./controllers/PokeDexController.js";
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()

  PokeDexController = new PokeDexController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
