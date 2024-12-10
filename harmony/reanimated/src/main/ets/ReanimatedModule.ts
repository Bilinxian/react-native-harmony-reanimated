// import { RNGestureHandlerModule } from '@react-native-oh-tpl/react-native-gesture-handler/ts';
import { RNOHLogger, Tag, TurboModule, TurboModuleContext } from "@rnoh/react-native-openharmony/ts";

export class ReanimatedModule extends TurboModule {
  static NAME = "ReanimatedModule"
  private logger: RNOHLogger

  constructor(ctx:  TurboModuleContext) {
    super(ctx);
    this.logger = ctx.logger.clone("Reanimated");
  }
  public setViewProps(tag: Tag, props: Object) {
    this.ctx.descriptorRegistry.setAnimatedRawProps(tag, props);
  }
  // public setGestureState(handlerTag: Tag, newState: number) {
  //   const module = this.ctx.rnInstance.getTurboModule<RNGestureHandlerModule>(RNGestureHandlerModule.NAME);
  //   module.setGestureHandlerState(handlerTag, newState);
  // }
}