import { Router } from 'express'

import PrinterController from './controllers/PrinterController'

const routes = Router()

routes.get('/printers', PrinterController.index)
routes.get('/printers/:id', PrinterController.show)
routes.post('/printers', PrinterController.create)

export default routes