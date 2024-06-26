import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanParser'
})

export class BooleanParser implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Vuela' : 'No vuela'
  }
}
