import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UserService} from "../@core/services/UserService.service";
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private accountService: UserService, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const jwtDecode = this.accountService.getDecodedAccessToken();

    let role = jwtDecode.auth.split(',');
    if (localStorage.getItem('auth-token') && role.includes('ROLE_ADMIN')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.toastr.error('Bạn phải có quyền Admin mới vào được trang này!'), { queryParams: { returnUrl: state.url } };
    return false;
  }
}
