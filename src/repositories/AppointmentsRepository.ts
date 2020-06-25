import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

// it will be passed the model as parameter of Repository interface
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  // response will be Appointment or null
  public async findByDate(date: Date): Promise<Appointment | null> {
    // find appointment where data is equals to date parameter
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
