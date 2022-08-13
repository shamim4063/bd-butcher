import http from '../http.service';
import { ContactInformationDto } from './ContactInformation.dto';

class ContactService {

  async submitSupportForm(data: ContactInformationDto){
    let result = await http.post(`test-slack-notification`, data);
    return result.data;
  }
  

}

export default new ContactService();