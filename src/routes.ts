import { Router } from 'express'

import PrinterController from './controllers/PrinterController'
import ClientController from './controllers/ClientController'
import TagController from './controllers/TagController'

const routes = Router()

routes.get('/clients', ClientController.index)
routes.get('/clients/:code', ClientController.show)
routes.post('/clients', ClientController.create)

routes.get('/printers', PrinterController.index)
routes.get('/printers/:id', PrinterController.show)
routes.post('/printers', PrinterController.create)

routes.get('/tags', TagController.index)

export default routes