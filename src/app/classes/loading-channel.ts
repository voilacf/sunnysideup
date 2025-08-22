import {computed, effect, Injectable, signal, WritableSignal} from "@angular/core";

@Injectable()
export class LoadingChannel {
  public readonly weatherLoadingSpinner = this.createSpinnerSignal();
  public readonly globalLoadingSpinner = computed(() => this.weatherLoadingSpinner.loading);

  private createSpinnerSignal(): {
    loading: WritableSignal<boolean>;
    start: (delayTime?: number) => void;
    finish: () => void;
  } {
    const isLoading = signal(false);
    const isDone = signal(false);
    const delayTimer = signal(false);

    effect(() => {
      if (isDone() && delayTimer()) {
        isLoading.set(false);
      }
    });

    return {
      loading: isLoading,
      start: (delayTime = 500): void => {
        isDone.set(false);
        delayTimer.set(false);
        isLoading.set(true);

        setTimeout(() => delayTimer.set(true), delayTime);
      },
      finish: () => isDone.set(true)
    };
  }
}

