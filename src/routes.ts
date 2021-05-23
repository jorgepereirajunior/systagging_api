import { Router } from 'express'

import PrinterController from './controllers/PrinterController'
import ClientController from './controllers/ClientController'

const routes = Router()

routes.get('/clients', ClientController.index)
routes.get('/clients/:code', ClientController.show)
routes.post('/clients', ClientController.create)

routes.get('/printers', PrinterController.index)
routes.get('/printers/:id', PrinterController.show)
routes.post('/printers', PrinterController.create)

export default routes