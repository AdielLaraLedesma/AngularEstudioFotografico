import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paquetesFilter'
})
export class PaquetesFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
