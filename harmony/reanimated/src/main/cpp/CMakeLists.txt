cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

add_compile_definitions(REANIMATED_VERSION=3.6.0)
add_compile_definitions(REACT_NATIVE_MINOR_VERSION=72)
add_compile_definitions(JS_RUNTIME_HERMES=1)
add_compile_definitions(RCT_NEW_ARCH_ENABLED=1)
add_compile_definitions(HERMES_ENABLE_DEBUGGER=1)



set(REANIMATED_SRC_DIR "${CMAKE_CURRENT_SOURCE_DIR}/Common")
set(PATCHES_DIR "${CMAKE_CURRENT_SOURCE_DIR}/patches")

file(GLOB rnoh_reanimated_SRC CONFIGURE_DEPENDS *.cpp)

add_library(rnoh_reanimated SHARED ${rnoh_reanimated_SRC})

target_include_directories(
  rnoh_reanimated
  PRIVATE
  # BEGIN: patches
  "${CMAKE_CURRENT_SOURCE_DIR}/patches/Tools/"
  # END: patches
  "${REANIMATED_SRC_DIR}/AnimatedSensor"
  "${REANIMATED_SRC_DIR}/Fabric"
  "${REANIMATED_SRC_DIR}/hidden_headers"
  "${REANIMATED_SRC_DIR}/LayoutAnimations"
  "${REANIMATED_SRC_DIR}/NativeModules"
  "${REANIMATED_SRC_DIR}/ReanimatedRuntime"
  "${REANIMATED_SRC_DIR}/Registries"
  "${REANIMATED_SRC_DIR}/SharedItems"
  "${REANIMATED_SRC_DIR}/Tools"
)
target_sources(rnoh_reanimated
  PRIVATE
  # BEGIN: patches
  "${PATCHES_DIR}/ReanimatedRuntime/WorkletRuntimeDecorator.cpp"
  # END: patches
  "${REANIMATED_SRC_DIR}/AnimatedSensor/AnimatedSensorModule.cpp"
  "${REANIMATED_SRC_DIR}/Fabric/PropsRegistry.cpp"
  "${REANIMATED_SRC_DIR}/Fabric/ReanimatedCommitHook.cpp"
  "${REANIMATED_SRC_DIR}/Fabric/ReanimatedCommitMarker.cpp"
  "${REANIMATED_SRC_DIR}/Fabric/ReanimatedMountHook.cpp"
  "${REANIMATED_SRC_DIR}/Fabric/ShadowTreeCloner.cpp"
  "${REANIMATED_SRC_DIR}/LayoutAnimations/LayoutAnimationsManager.cpp"
  "${REANIMATED_SRC_DIR}/NativeModules/NativeReanimatedModule.cpp"
  "${REANIMATED_SRC_DIR}/NativeModules/NativeReanimatedModuleSpec.cpp"
  "${REANIMATED_SRC_DIR}/ReanimatedRuntime/RNRuntimeDecorator.cpp"
  "${REANIMATED_SRC_DIR}/ReanimatedRuntime/ReanimatedHermesRuntime.cpp"
  "${REANIMATED_SRC_DIR}/ReanimatedRuntime/ReanimatedRuntime.cpp"
  "${REANIMATED_SRC_DIR}/ReanimatedRuntime/WorkletRuntime.cpp"
  "${REANIMATED_SRC_DIR}/ReanimatedRuntime/WorkletRuntimeRegistry.cpp"
  "${REANIMATED_SRC_DIR}/Registries/EventHandlerRegistry.cpp"
  "${REANIMATED_SRC_DIR}/SharedItems/Shareables.cpp"
  "${REANIMATED_SRC_DIR}/Tools/AsyncQueue.cpp"
  "${REANIMATED_SRC_DIR}/Tools/FeaturesConfig.cpp"
  "${REANIMATED_SRC_DIR}/Tools/JSISerializer.cpp"
  "${REANIMATED_SRC_DIR}/Tools/JSLogger.cpp"
  "${REANIMATED_SRC_DIR}/Tools/JSScheduler.cpp"
  "${REANIMATED_SRC_DIR}/Tools/ReanimatedJSIUtils.cpp"
  "${REANIMATED_SRC_DIR}/Tools/ReanimatedVersion.cpp"
  "${REANIMATED_SRC_DIR}/Tools/UIRuntimeDecorator.cpp"
  "${REANIMATED_SRC_DIR}/Tools/UIScheduler.cpp"
  "${REANIMATED_SRC_DIR}/Tools/WorkletEventHandler.cpp"
  )

target_include_directories(rnoh_reanimated PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(rnoh_reanimated PUBLIC rnoh)

