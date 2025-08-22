import {TestBed, waitForAsync} from "@angular/core/testing";
import {Actions} from "@ngrx/effects";
import {of} from "rxjs";
import {WeatherService} from "../services/weather.service";
import {LoadingChannel} from "../classes/loading-channel";

describe("WeatherEffects", () => {
  let actions$: Actions;
  let effects: WeatherEffects;
  let weatherService: WeatherService;
  let loadingChannel: LoadingChannel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherEffects,
        LoadingChannel
      ]
    }).compileComponents();
    effects = TestBed.inject(WeatherEffects);
    weatherService = TestBed.inject(WeatherService);

  });

  it("should dispatch toast error if user input is invalid", waitForAsync (() => {
      actions$ = of(loadWeatherAction({cityName: "Munich"}));
      effects.loadWeather$.subscribe(action => {
        expect(action).toEqual(loadWeatherSuccessAction());
      })
  }));
});

