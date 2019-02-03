import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "serializeurl"
})
export class SerializeurlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string) {
    return url.startsWith("cdvphotolibrary://")
      ? this.sanitizer.bypassSecurityTrustUrl(url)
      : url;
  }
}
