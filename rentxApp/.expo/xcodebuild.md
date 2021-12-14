# Build output

```log
Command line invocation:
    /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -workspace /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/rentxApp.xcworkspace -configuration Debug -scheme rentxApp -destination id=24858D51-ABE5-4467-BF73-4791FBCD9CF3

User defaults from command line:
    IDEPackageSupportUseBuiltinSCM = YES

note: Using new build system
note: Planning
Analyze workspace

Create build description
Build description signature: 3c8baae03ade211340f9df359f93ee15
Build description path: /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/XCBuildData/3c8baae03ade211340f9df359f93ee15-desc.xcbuild

note: Build preparation complete
warning: Multiple targets match implicit dependency for product reference 'libWatermelonDB.a'. Consider adding an explicit dependency on the intended target to resolve this ambiguity. (in target 'rentxApp' from project 'rentxApp')
    note: Target 'WatermelonDB' (in project 'WatermelonDB')
    note: Target 'WatermelonDB' (in project 'Pods')
warning: Multiple targets match implicit dependency for linker flag '-lWatermelonDB'. Consider adding an explicit dependency on the intended target to resolve this ambiguity. (in target 'rentxApp' from project 'rentxApp')
    note: Target 'WatermelonDB' (in project 'WatermelonDB')
    note: Target 'WatermelonDB' (in project 'Pods')
note: Building targets in parallel
ProcessProductPackaging "" /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/React-Core-AccessibilityResources.build/AccessibilityResources.bundle-Simulated.xcent (in target 'React-Core-AccessibilityResources' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    
    Entitlements:
    
    {
    "application-identifier" = "35D6926LQ6.org.cocoapods.AccessibilityResources";
    "keychain-access-groups" =     (
        "35D6926LQ6.org.cocoapods.AccessibilityResources"
    );
}
    
    builtin-productPackagingUtility -entitlements -format xml -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/React-Core-AccessibilityResources.build/AccessibilityResources.bundle-Simulated.xcent

ProcessInfoPlistFile /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle/Info.plist /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/React-Core/ResourceBundle-AccessibilityResources-React-Core-Info.plist (in target 'React-Core-AccessibilityResources' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    builtin-infoPlistUtility /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/React-Core/ResourceBundle-AccessibilityResources-React-Core-Info.plist -producttype com.apple.product-type.bundle -expandbuildsettings -format binary -platform iphonesimulator -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle/Info.plist

CodeSign /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle (in target 'React-Core-AccessibilityResources' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export CODESIGN_ALLOCATE\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/codesign_allocate
    
    Signing Identity:     "-"
    
    /usr/bin/codesign --force --sign - --timestamp\=none --generate-entitlement-der /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle
/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/React-Core/AccessibilityResources.bundle: replacing existing signature

PhaseScriptExecution Copy\ generated\ compatibility\ header /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Script-EEE7291741A3916D1E7DB47E82B7FF96.sh (in target 'ExpoModulesCore' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export ACTION\=build
    export AD_HOC_CODE_SIGNING_ALLOWED\=YES
    export ALLOW_TARGET_PLATFORM_SPECIALIZATION\=NO
    export ALTERNATE_GROUP\=staff
    export ALTERNATE_MODE\=u+w,go-w,a+rX
    export ALTERNATE_OWNER\=carolaineviana
    export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=NO
    export ALWAYS_SEARCH_USER_PATHS\=NO
    export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
    export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
    export APPLE_INTERNAL_DIR\=/AppleInternal
    export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
    export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
    export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
    export APPLICATION_EXTENSION_API_ONLY\=NO
    export APPLY_RULES_IN_COPY_FILES\=NO
    export APPLY_RULES_IN_COPY_HEADERS\=NO
    export ARCHS\=x86_64
    export ARCHS_STANDARD\=arm64\ x86_64
    export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
    export ARCHS_STANDARD_32_BIT\=i386
    export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
    export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64
    export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
    export ASSETCATALOG_FILTER_FOR_DEVICE_MODEL\=iPhone13,3
    export ASSETCATALOG_FILTER_FOR_DEVICE_OS_VERSION\=15.0
    export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ driverkit\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator
    export BITCODE_GENERATION_MODE\=marker
    export BUILD_ACTIVE_RESOURCES_ONLY\=YES
    export BUILD_COMPONENTS\=headers\ build
    export BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
    export BUILD_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_STYLE\=
    export BUILD_VARIANTS\=normal
    export BUILT_PRODUCTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore
    export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
    export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
    export BUNDLE_FORMAT\=shallow
    export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
    export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
    export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
    export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
    export CACHE_ROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CCHROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CHMOD\=/bin/chmod
    export CHOWN\=/usr/sbin/chown
    export CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED\=YES
    export CLANG_ANALYZER_NONNULL\=YES
    export CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION\=YES_AGGRESSIVE
    export CLANG_CXX_LANGUAGE_STANDARD\=gnu++14
    export CLANG_CXX_LIBRARY\=libc++
    export CLANG_ENABLE_MODULES\=YES
    export CLANG_ENABLE_MODULE_DEBUGGING\=NO
    export CLANG_ENABLE_OBJC_ARC\=YES
    export CLANG_ENABLE_OBJC_WEAK\=NO
    export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
    export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
    export CLANG_WARN_BOOL_CONVERSION\=YES
    export CLANG_WARN_COMMA\=YES
    export CLANG_WARN_CONSTANT_CONVERSION\=YES
    export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
    export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
    export CLANG_WARN_DOCUMENTATION_COMMENTS\=YES
    export CLANG_WARN_EMPTY_BODY\=YES
    export CLANG_WARN_ENUM_CONVERSION\=YES
    export CLANG_WARN_INFINITE_RECURSION\=YES
    export CLANG_WARN_INT_CONVERSION\=YES
    export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
    export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
    export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
    export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
    export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=NO
    export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
    export CLANG_WARN_STRICT_PROTOTYPES\=YES
    export CLANG_WARN_SUSPICIOUS_MOVE\=YES
    export CLANG_WARN_UNGUARDED_AVAILABILITY\=YES_AGGRESSIVE
    export CLANG_WARN_UNREACHABLE_CODE\=YES
    export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
    export CLASS_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/JavaClasses
    export CLEAN_PRECOMPS\=YES
    export CLONE_HEADERS\=NO
    export CODESIGNING_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/libExpoModulesCore.a
    export CODE_SIGNING_ALLOWED\=NO
    export CODE_SIGNING_REQUIRED\=YES
    export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
    export CODE_SIGN_IDENTITY\=-
    export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
    export COLOR_DIAGNOSTICS\=NO
    export COMBINE_HIDPI_IMAGES\=NO
    export COMPILER_INDEX_STORE_ENABLE\=Default
    export COMPOSITE_SDK_DIRS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/CompositeSDKs
    export COMPRESS_PNG_FILES\=YES
    export CONFIGURATION\=Debug
    export CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore
    export CONFIGURATION_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator
    export COPYING_PRESERVES_HFS_DATA\=NO
    export COPY_HEADERS_RUN_UNIFDEF\=NO
    export COPY_PHASE_STRIP\=NO
    export COPY_RESOURCES_FROM_STATIC_FRAMEWORKS\=YES
    export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
    export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
    export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS15.0.sdk
    export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos15.0
    export CP\=/bin/cp
    export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
    export CURRENT_ARCH\=undefined_arch
    export CURRENT_VARIANT\=normal
    export DEAD_CODE_STRIPPING\=YES
    export DEBUGGING_SYMBOLS\=YES
    export DEBUG_INFORMATION_FORMAT\=dwarf
    export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
    export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export DEFINES_MODULE\=YES
    export DEPLOYMENT_LOCATION\=NO
    export DEPLOYMENT_POSTPROCESSING\=NO
    export DEPLOYMENT_TARGET_CLANG_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_CLANG_FLAG_NAME\=mios-simulator-version-min
    export DEPLOYMENT_TARGET_CLANG_FLAG_PREFIX\=-mios-simulator-version-min\=
    export DEPLOYMENT_TARGET_LD_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_LD_FLAG_NAME\=ios_simulator_version_min
    export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=9.0\ 9.1\ 9.2\ 9.3\ 10.0\ 10.1\ 10.2\ 10.3\ 11.0\ 11.1\ 11.2\ 11.3\ 11.4\ 12.0\ 12.1\ 12.2\ 12.3\ 12.4\ 13.0\ 13.1\ 13.2\ 13.3\ 13.4\ 13.5\ 13.6\ 14.0\ 14.1\ 14.2\ 14.3\ 14.4\ 14.5\ 14.6\ 14.7\ 15.0
    export DERIVED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/DerivedSources
    export DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/DerivedSources
    export DERIVED_SOURCES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/DerivedSources
    export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
    export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
    export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
    export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export DEVELOPMENT_LANGUAGE\=en
    export DONT_GENERATE_INFOPLIST_FILE\=NO
    export DO_HEADER_SCANNING_IN_JAM\=NO
    export DSTROOT\=/tmp/Pods.dst
    export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export DWARF_DSYM_FILE_NAME\=libExpoModulesCore.a.dSYM
    export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
    export DWARF_DSYM_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore
    export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
    export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
    export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
    export ENABLE_APP_SANDBOX\=NO
    export ENABLE_BITCODE\=NO
    export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
    export ENABLE_HARDENED_RUNTIME\=NO
    export ENABLE_HEADER_DEPENDENCIES\=YES
    export ENABLE_ON_DEMAND_RESOURCES\=NO
    export ENABLE_PREVIEWS\=NO
    export ENABLE_STRICT_OBJC_MSGSEND\=YES
    export ENABLE_TESTABILITY\=YES
    export ENABLE_TESTING_SEARCH_PATHS\=NO
    export ENTITLEMENTS_DESTINATION\=__entitlements
    export ENTITLEMENTS_REQUIRED\=YES
    export EXCLUDED_ARCHS\=arm64\ 
    export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
    export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
    export EXECUTABLE_EXTENSION\=a
    export EXECUTABLE_NAME\=libExpoModulesCore.a
    export EXECUTABLE_PATH\=libExpoModulesCore.a
    export EXECUTABLE_PREFIX\=lib
    export EXECUTABLE_SUFFIX\=.a
    export FILE_LIST\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects/LinkFileList
    export FIXED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/FixedFiles
    export FRAMEWORK_FLAG_PREFIX\=-framework
    export FRAMEWORK_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore\ 
    export FRAMEWORK_VERSION\=A
    export FULL_PRODUCT_NAME\=libExpoModulesCore.a
    export GCC3_VERSION\=3.3
    export GCC_C_LANGUAGE_STANDARD\=gnu11
    export GCC_DYNAMIC_NO_PIC\=NO
    export GCC_NO_COMMON_BLOCKS\=YES
    export GCC_OBJC_LEGACY_DISPATCH\=YES
    export GCC_OPTIMIZATION_LEVEL\=0
    export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
    export GCC_PREFIX_HEADER\=Target\ Support\ Files/ExpoModulesCore/ExpoModulesCore-prefix.pch
    export GCC_PREPROCESSOR_DEFINITIONS\=POD_CONFIGURATION_DEBUG\=1\ DEBUG\=1\ \ COCOAPODS\=1
    export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
    export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
    export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
    export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
    export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
    export GCC_WARN_UNDECLARED_SELECTOR\=YES
    export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
    export GCC_WARN_UNUSED_FUNCTION\=YES
    export GCC_WARN_UNUSED_VARIABLE\=YES
    export GENERATED_MODULEMAP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
    export GENERATE_INFOPLIST_FILE\=NO
    export GENERATE_MASTER_OBJECT_FILE\=NO
    export GENERATE_PKGINFO_FILE\=NO
    export GENERATE_PROFILING_CODE\=NO
    export GENERATE_TEXT_BASED_STUBS\=NO
    export GID\=20
    export GROUP\=staff
    export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
    export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
    export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
    export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
    export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
    export HEADERMAP_USES_VFS\=YES
    export HEADER_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/include\ \ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/ExpoModulesCore\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog\"
    export HIDE_BITCODE_SYMBOLS\=YES
    export HOME\=/Users/carolaineviana
    export ICONV\=/usr/bin/iconv
    export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
    export INFOPLIST_OUTPUT_FORMAT\=binary
    export INFOPLIST_PREPROCESS\=NO
    export INLINE_PRIVATE_FRAMEWORKS\=NO
    export INSTALLHDRS_COPY_PHASE\=NO
    export INSTALLHDRS_SCRIPT_PHASE\=NO
    export INSTALL_DIR\=/tmp/Pods.dst/usr/local/lib
    export INSTALL_GROUP\=staff
    export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
    export INSTALL_OWNER\=carolaineviana
    export INSTALL_PATH\=/usr/local/lib
    export INSTALL_ROOT\=/tmp/Pods.dst
    export IPHONEOS_DEPLOYMENT_TARGET\=12.0
    export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
    export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
    export JAVA_ARCHIVE_CLASSES\=YES
    export JAVA_ARCHIVE_TYPE\=JAR
    export JAVA_COMPILER\=/usr/bin/javac
    export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
    export JAVA_JAR_FLAGS\=cv
    export JAVA_SOURCE_SUBDIR\=.
    export JAVA_USE_DEPENDENCIES\=YES
    export JAVA_ZIP_FLAGS\=-urg
    export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
    export KEEP_PRIVATE_EXTERNS\=NO
    export LD_DEPENDENCY_INFO_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects-normal/undefined_arch/ExpoModulesCore_dependency_info.dat
    export LD_GENERATE_MAP_FILE\=NO
    export LD_MAP_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/ExpoModulesCore-LinkMap-normal-undefined_arch.txt
    export LD_NO_PIE\=NO
    export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
    export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
    export LEX\=lex
    export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
    export LIBRARY_FLAG_NOSPACE\=YES
    export LIBRARY_FLAG_PREFIX\=-l
    export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
    export LIBRARY_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore\ 
    export LINKER_DISPLAYS_MANGLED_NAMES\=NO
    export LINK_FILE_LIST_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects-normal/x86_64/ExpoModulesCore.LinkFileList
    export LINK_WITH_STANDARD_LIBRARIES\=YES
    export LLVM_TARGET_TRIPLE_OS_VERSION\=ios12.0
    export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
    export LLVM_TARGET_TRIPLE_VENDOR\=apple
    export LOCALIZATION_EXPORT_SUPPORTED\=YES
    export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
    export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
    export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
    export LOCAL_APPS_DIR\=/Applications
    export LOCAL_DEVELOPER_DIR\=/Library/Developer
    export LOCAL_LIBRARY_DIR\=/Library
    export LOCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LOCSYMROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export MACH_O_TYPE\=staticlib
    export MAC_OS_X_PRODUCT_BUILD_VERSION\=20G71
    export MAC_OS_X_VERSION_ACTUAL\=110500
    export MAC_OS_X_VERSION_MAJOR\=110000
    export MAC_OS_X_VERSION_MINOR\=110500
    export METAL_LIBRARY_FILE_BASE\=default
    export METAL_LIBRARY_OUTPUT_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/
    export MODULEMAP_FILE\=Headers/Public/ExpoModulesCore/ExpoModulesCore.modulemap
    export MODULE_CACHE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
    export MTL_ENABLE_DEBUG_INFO\=INCLUDE_SOURCE
    export MTL_FAST_MATH\=YES
    export NATIVE_ARCH\=x86_64
    export NATIVE_ARCH_32_BIT\=i386
    export NATIVE_ARCH_64_BIT\=x86_64
    export NATIVE_ARCH_ACTUAL\=x86_64
    export NO_COMMON\=YES
    export OBJC_ABI_VERSION\=2
    export OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects
    export OBJECT_FILE_DIR_normal\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects-normal
    export OBJROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export ONLY_ACTIVE_ARCH\=YES
    export OS\=MACOS
    export OSAC\=/usr/bin/osacompile
    export OTHER_CFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export OTHER_CPLUSPLUSFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export OTHER_SWIFT_FLAGS\=\ -D\ COCOAPODS\ -Xcc\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -Xcc\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -Xcc\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"\ -import-underlying-module\ -Xcc\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore/ExpoModulesCore.modulemap\"
    export PACKAGE_TYPE\=com.apple.package-type.static-library
    export PASCAL_STRINGS\=YES
    export PATH\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/T/yarn--1639449488047-0.606493938614225:/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/.bin:/Users/carolaineviana/.config/yarn/link/node_modules/.bin:/usr/local/Cellar/node/16.7.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/bin/node_modules/npm/bin/node-gyp-bin:/Users/carolaineviana/.amplify/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
    export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
    export PER_ARCH_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects-normal/undefined_arch
    export PER_VARIANT_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects-normal
    export PKGINFO_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/PkgInfo
    export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
    export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
    export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
    export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
    export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
    export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
    export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
    export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
    export PLATFORM_FAMILY_NAME\=iOS
    export PLATFORM_NAME\=iphonesimulator
    export PLATFORM_PREFERRED_ARCH\=x86_64
    export PLATFORM_PRODUCT_BUILD_VERSION\=19A339
    export PLIST_FILE_OUTPUT_FORMAT\=binary
    export PODS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export PODS_CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator
    export PODS_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PODS_TARGET_SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-modules-core/ios
    export PODS_XCFRAMEWORKS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates
    export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
    export PRECOMP_DESTINATION_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/PrefixHeaders
    export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
    export PRODUCT_BUNDLE_IDENTIFIER\=org.cocoapods.ExpoModulesCore
    export PRODUCT_MODULE_NAME\=ExpoModulesCore
    export PRODUCT_NAME\=ExpoModulesCore
    export PRODUCT_SETTINGS_PATH\=
    export PRODUCT_TYPE\=com.apple.product-type.library.static
    export PROFILING_CODE\=NO
    export PROJECT\=Pods
    export PROJECT_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/DerivedSources
    export PROJECT_DIR\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PROJECT_FILE_PATH\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Pods.xcodeproj
    export PROJECT_NAME\=Pods
    export PROJECT_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build
    export PROJECT_TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
    export REMOVE_CVS_FROM_RESOURCES\=YES
    export REMOVE_GIT_FROM_RESOURCES\=YES
    export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
    export REMOVE_HG_FROM_RESOURCES\=YES
    export REMOVE_SVN_FROM_RESOURCES\=YES
    export REZ_COLLECTOR_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/ResourceManagerResources
    export REZ_EXECUTABLE\=YES
    export REZ_OBJECTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/ResourceManagerResources/Objects
    export REZ_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore\ 
    export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
    export SCRIPT_INPUT_FILE_0\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/DerivedSources/ExpoModulesCore-Swift.h
    export SCRIPT_INPUT_FILE_1\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore/ExpoModulesCore.modulemap
    export SCRIPT_INPUT_FILE_2\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore/ExpoModulesCore-umbrella.h
    export SCRIPT_INPUT_FILE_COUNT\=3
    export SCRIPT_INPUT_FILE_LIST_COUNT\=0
    export SCRIPT_OUTPUT_FILE_0\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap
    export SCRIPT_OUTPUT_FILE_1\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore-umbrella.h
    export SCRIPT_OUTPUT_FILE_2\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/Swift\ Compatibility\ Header/ExpoModulesCore-Swift.h
    export SCRIPT_OUTPUT_FILE_COUNT\=3
    export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator15_0\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_NAME\=iphonesimulator15.0
    export SDK_NAMES\=iphonesimulator15.0
    export SDK_PRODUCT_BUILD_VERSION\=19A339
    export SDK_VERSION\=15.0
    export SDK_VERSION_ACTUAL\=150000
    export SDK_VERSION_MAJOR\=150000
    export SDK_VERSION_MINOR\=150000
    export SED\=/usr/bin/sed
    export SEPARATE_STRIP\=NO
    export SEPARATE_SYMBOL_EDIT\=NO
    export SET_DIR_MODE_OWNER_GROUP\=YES
    export SET_FILE_MODE_OWNER_GROUP\=NO
    export SHALLOW_BUNDLE\=NO
    export SHARED_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/DerivedSources
    export SHARED_PRECOMPS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/PrecompiledHeaders
    export SKIP_INSTALL\=YES
    export SOURCE_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export STRINGSDATA_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects-normal/undefined_arch
    export STRINGSDATA_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build
    export STRINGS_FILE_INFOPLIST_RENAME\=YES
    export STRINGS_FILE_OUTPUT_ENCODING\=binary
    export STRIP_BITCODE_FROM_COPIED_FILES\=NO
    export STRIP_INSTALLED_PRODUCT\=NO
    export STRIP_STYLE\=debugging
    export STRIP_SWIFT_SYMBOLS\=YES
    export SUPPORTED_DEVICE_FAMILIES\=1,2
    export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
    export SUPPORTS_TEXT_BASED_API\=NO
    export SWIFT_ACTIVE_COMPILATION_CONDITIONS\=DEBUG\ 
    export SWIFT_EMIT_LOC_STRINGS\=NO
    export SWIFT_OPTIMIZATION_LEVEL\=-Onone
    export SWIFT_PLATFORM_TARGET_PREFIX\=ios
    export SWIFT_RESPONSE_FILE_PATH_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Objects-normal/x86_64/ExpoModulesCore.SwiftFileList
    export SWIFT_VERSION\=5.4
    export SYMROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
    export SYSTEM_APPS_DIR\=/Applications
    export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
    export SYSTEM_DEMOS_DIR\=/Applications/Extras
    export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
    export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
    export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
    export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
    export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
    export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
    export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
    export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
    export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
    export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
    export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
    export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export SYSTEM_LIBRARY_DIR\=/System/Library
    export TAPI_VERIFY_MODE\=ErrorsOnly
    export TARGETED_DEVICE_FAMILY\=1,2
    export TARGETNAME\=ExpoModulesCore
    export TARGET_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore
    export TARGET_DEVICE_IDENTIFIER\=24858D51-ABE5-4467-BF73-4791FBCD9CF3
    export TARGET_DEVICE_MODEL\=iPhone13,3
    export TARGET_DEVICE_OS_VERSION\=15.0
    export TARGET_DEVICE_PLATFORM_NAME\=iphonesimulator
    export TARGET_NAME\=ExpoModulesCore
    export TARGET_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build
    export TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build
    export TEMP_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build
    export TEMP_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build
    export TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk/Developer/Library/Frameworks
    export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
    export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
    export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
    export UID\=501
    export UNSTRIPPED_PRODUCT\=NO
    export USER\=carolaineviana
    export USER_APPS_DIR\=/Users/carolaineviana/Applications
    export USER_LIBRARY_DIR\=/Users/carolaineviana/Library
    export USE_DYNAMIC_NO_PIC\=YES
    export USE_HEADERMAP\=YES
    export USE_HEADER_SYMLINKS\=NO
    export USE_LLVM_TARGET_TRIPLES\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_CLANG\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_LD\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_TAPI\=YES
    export USE_RECURSIVE_SCRIPT_INPUTS_IN_SCRIPT_PHASES\=YES
    export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
    export VALIDATE_PRODUCT\=NO
    export VALIDATE_WORKSPACE\=YES_ERROR
    export VALID_ARCHS\=arm64\ arm64e\ i386\ x86_64
    export VERBOSE_PBXCP\=NO
    export VERSION_INFO_BUILDER\=carolaineviana
    export VERSION_INFO_FILE\=ExpoModulesCore_vers.c
    export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:ExpoModulesCore\ \ PROJECT:Pods-\"
    export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
    export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
    export XCODE_PRODUCT_BUILD_VERSION\=13A1030d
    export XCODE_VERSION_ACTUAL\=1310
    export XCODE_VERSION_MAJOR\=1300
    export XCODE_VERSION_MINOR\=1310
    export XPCSERVICES_FOLDER_PATH\=/XPCServices
    export YACC\=yacc
    export arch\=undefined_arch
    export variant\=normal
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/ExpoModulesCore.build/Script-EEE7291741A3916D1E7DB47E82B7FF96.sh

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-application/ios/EXApplication/EXApplication.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXApplication' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXApplication -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXApplication -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXApplication/EXApplication-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-application/ios/EXApplication/EXApplication.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXProvisioningProfile.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-application/ios/EXApplication/EXProvisioningProfile.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXApplication' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXApplication -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXApplication -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXApplication/EXApplication-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXProvisioningProfile.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXProvisioningProfile.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-application/ios/EXApplication/EXProvisioningProfile.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXProvisioningProfile.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication-dummy.o /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXApplication/EXApplication-dummy.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXApplication' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/EXApplication-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXApplication -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXApplication -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXApplication/EXApplication-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication-dummy.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication-dummy.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXApplication/EXApplication-dummy.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication-dummy.o

Libtool /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication/libEXApplication.a normal (in target 'EXApplication' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export IPHONEOS_DEPLOYMENT_TARGET\=12.0
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool -static -arch_only x86_64 -D -syslibroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -L/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication -filelist /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication.LinkFileList -dependency_info /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXApplication.build/Objects-normal/x86_64/EXApplication_libtool_dependency_info.dat -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXApplication/libEXApplication.a

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/DatabaseInstallation.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/DatabaseInstallation.cpp normal x86_64 c++ com.apple.compilers.llvm.clang.1_0.compiler (in target 'WatermelonDB' from project 'WatermelonDB')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/ios
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x c++ -target x86_64-apple-ios9.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu++14 -stdlib\=libc++ -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -fmodule-name\=WatermelonDB -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Werror\=deprecated-objc-isa-usage -Werror\=objc-root-class -Wno-non-virtual-dtor -Wno-overloaded-virtual -Wno-exit-time-destructors -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -w -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wno-newline-eof -Wno-c++11-extensions -DDEBUG\=1 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wdeprecated-declarations -Winvalid-offsetof -g -Wno-sign-conversion -Winfinite-recursion -Wmove -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wrange-loop-analysis -Wno-semicolon-before-method-body -Wunguarded-availability -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/react-native/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/node_modules/react-native/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/react-native/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/node_modules/react-native/Libraries -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/node_modules/react-native/Libraries -I../../../../../ios/Pods/Headers/Public/React-Core -I../../../../../ios/Pods/Headers/Public/React-Core/React -I/Users/carolaineviana/Documents/aplicativos/native/ios/Pods/Headers/Public/React-Core -I../../../../../ios/Pods/Headers/Public/React-jsi -I../../../../../ios/Pods/Headers/Public/React-jsi/jsi -I/Users/carolaineviana/Documents/aplicativos/native/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/DatabaseInstallation.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/DatabaseInstallation.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/DatabaseInstallation.cpp -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/DatabaseInstallation.o
In file included from /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/DatabaseInstallation.cpp:1:
/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/Database.h:8:9: fatal error: 'simdjson.h' file not found
#import "simdjson.h"
        ^~~~~~~~~~~~
1 error generated.

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/Database-faaede78d85d0d21aeb550efd56f7c04.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/Database.cpp normal x86_64 c++ com.apple.compilers.llvm.clang.1_0.compiler (in target 'WatermelonDB' from project 'WatermelonDB')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/ios
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x c++ -target x86_64-apple-ios9.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu++14 -stdlib\=libc++ -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -fmodule-name\=WatermelonDB -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Werror\=deprecated-objc-isa-usage -Werror\=objc-root-class -Wno-non-virtual-dtor -Wno-overloaded-virtual -Wno-exit-time-destructors -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -w -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wno-newline-eof -Wno-c++11-extensions -DDEBUG\=1 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wdeprecated-declarations -Winvalid-offsetof -g -Wno-sign-conversion -Winfinite-recursion -Wmove -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wrange-loop-analysis -Wno-semicolon-before-method-body -Wunguarded-availability -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/WatermelonDB-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/react-native/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/node_modules/react-native/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/react-native/React -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/node_modules/react-native/Libraries -I/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/node_modules/react-native/Libraries -I../../../../../ios/Pods/Headers/Public/React-Core -I../../../../../ios/Pods/Headers/Public/React-Core/React -I/Users/carolaineviana/Documents/aplicativos/native/ios/Pods/Headers/Public/React-Core -I../../../../../ios/Pods/Headers/Public/React-jsi -I../../../../../ios/Pods/Headers/Public/React-jsi/jsi -I/Users/carolaineviana/Documents/aplicativos/native/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/Database-faaede78d85d0d21aeb550efd56f7c04.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/Database-faaede78d85d0d21aeb550efd56f7c04.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/Database.cpp -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/Database-faaede78d85d0d21aeb550efd56f7c04.o
In file included from /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/Database.cpp:1:
/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/Database.h:8:9: fatal error: 'simdjson.h' file not found
#import "simdjson.h"
        ^~~~~~~~~~~~

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-keep-awake/ios/EXKeepAwake/EXKeepAwake.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXKeepAwake' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXKeepAwake/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXKeepAwake -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXKeepAwake -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXKeepAwake -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXKeepAwake/EXKeepAwake-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-keep-awake/ios/EXKeepAwake/EXKeepAwake.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFont.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFont.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecovery-dummy.o /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXErrorRecovery/EXErrorRecovery-dummy.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXErrorRecovery' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXErrorRecovery/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXErrorRecovery -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXErrorRecovery -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXErrorRecovery -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXErrorRecovery/EXErrorRecovery-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecovery-dummy.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecovery-dummy.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXErrorRecovery/EXErrorRecovery-dummy.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecovery-dummy.o

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXStructuredHeaders.build/Script-B3FB1A8CAFAE392FA93CE37E1E22A790.sh (in target 'EXStructuredHeaders' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXStructuredHeaders.build/Script-B3FB1A8CAFAE392FA93CE37E1E22A790.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-structured-headers/ios/EXStructuredHeaders.xcframework/ios-arm64_x86_64-simulator/*" "/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders"
building file list ... done

sent 161 bytes  received 20 bytes  362.00 bytes/sec
total size is 69325  speedup is 383.01
Copied /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-structured-headers/ios/EXStructuredHeaders.xcframework/ios-arm64_x86_64-simulator to /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders

CompileSwift normal x86_64 /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift (in target 'lottie-react-native' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-frontend -frontend -c -primary-file /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift -emit-module-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule\~partial.swiftmodule -emit-module-doc-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule\~partial.swiftdoc -emit-module-source-info-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule\~partial.swiftsourceinfo -emit-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.d -emit-reference-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.swiftdeps -serialize-diagnostics-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.dia -target x86_64-apple-ios9.0-simulator -enable-objc-interop -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios -F /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -enable-testing -g -import-underlying-module -module-cache-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -swift-version 5 -enforce-exclusivity\=checked -Onone -D DEBUG -D COCOAPODS -new-driver-path /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-driver -serialize-debugging-options -Xcc -working-directory -Xcc /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift -enable-anonymous-context-mangled-names -Xcc -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/lottie_react_native/lottie-react-native.modulemap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/swift-overrides.hmap -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-generated-files.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-own-target-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-all-non-framework-target-headers.hmap -Xcc -ivfsoverlay -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/all-product-headers.yaml -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-project-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native/include -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/lottie-react-native -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources-normal/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources -Xcc -DPOD_CONFIGURATION_DEBUG\=1 -Xcc -DDEBUG\=1 -Xcc -DCOCOAPODS\=1 -module-name lottie_react_native -target-sdk-version 15.0.0 -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.o -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -index-system-modules

CompileSwift normal x86_64 /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift (in target 'lottie-react-native' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-frontend -frontend -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift -primary-file /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift -emit-module-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor\~partial.swiftmodule -emit-module-doc-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor\~partial.swiftdoc -emit-module-source-info-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor\~partial.swiftsourceinfo -emit-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.d -emit-reference-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.swiftdeps -serialize-diagnostics-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.dia -target x86_64-apple-ios9.0-simulator -enable-objc-interop -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios -F /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -enable-testing -g -import-underlying-module -module-cache-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -swift-version 5 -enforce-exclusivity\=checked -Onone -D DEBUG -D COCOAPODS -new-driver-path /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-driver -serialize-debugging-options -Xcc -working-directory -Xcc /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift -enable-anonymous-context-mangled-names -Xcc -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/lottie_react_native/lottie-react-native.modulemap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/swift-overrides.hmap -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-generated-files.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-own-target-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-all-non-framework-target-headers.hmap -Xcc -ivfsoverlay -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/all-product-headers.yaml -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-project-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native/include -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/lottie-react-native -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources-normal/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources -Xcc -DPOD_CONFIGURATION_DEBUG\=1 -Xcc -DDEBUG\=1 -Xcc -DCOCOAPODS\=1 -module-name lottie_react_native -target-sdk-version 15.0.0 -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.o -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -index-system-modules

CompileSwift normal x86_64 /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift (in target 'lottie-react-native' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-frontend -frontend -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift -primary-file /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift -emit-module-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView\~partial.swiftmodule -emit-module-doc-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView\~partial.swiftdoc -emit-module-source-info-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView\~partial.swiftsourceinfo -emit-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.d -emit-reference-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.swiftdeps -serialize-diagnostics-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.dia -target x86_64-apple-ios9.0-simulator -enable-objc-interop -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios -F /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -enable-testing -g -import-underlying-module -module-cache-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -swift-version 5 -enforce-exclusivity\=checked -Onone -D DEBUG -D COCOAPODS -new-driver-path /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-driver -serialize-debugging-options -Xcc -working-directory -Xcc /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift -enable-anonymous-context-mangled-names -Xcc -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/lottie_react_native/lottie-react-native.modulemap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/swift-overrides.hmap -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-generated-files.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-own-target-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-all-non-framework-target-headers.hmap -Xcc -ivfsoverlay -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/all-product-headers.yaml -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-project-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native/include -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/lottie-react-native -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources-normal/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources -Xcc -DPOD_CONFIGURATION_DEBUG\=1 -Xcc -DDEBUG\=1 -Xcc -DCOCOAPODS\=1 -module-name lottie_react_native -target-sdk-version 15.0.0 -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.o -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -index-system-modules

PhaseScriptExecution Copy\ generated\ compatibility\ header /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Script-5E398E9F7266CAFD26D88CE175D9EC72.sh (in target 'lottie-ios' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export ACTION\=build
    export AD_HOC_CODE_SIGNING_ALLOWED\=YES
    export ALLOW_TARGET_PLATFORM_SPECIALIZATION\=NO
    export ALTERNATE_GROUP\=staff
    export ALTERNATE_MODE\=u+w,go-w,a+rX
    export ALTERNATE_OWNER\=carolaineviana
    export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=NO
    export ALWAYS_SEARCH_USER_PATHS\=NO
    export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
    export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
    export APPLE_INTERNAL_DIR\=/AppleInternal
    export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
    export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
    export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
    export APPLICATION_EXTENSION_API_ONLY\=NO
    export APPLY_RULES_IN_COPY_FILES\=NO
    export APPLY_RULES_IN_COPY_HEADERS\=NO
    export ARCHS\=x86_64
    export ARCHS_STANDARD\=arm64\ x86_64\ i386
    export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
    export ARCHS_STANDARD_32_BIT\=i386
    export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
    export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64\ i386
    export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
    export ASSETCATALOG_FILTER_FOR_DEVICE_MODEL\=iPhone13,3
    export ASSETCATALOG_FILTER_FOR_DEVICE_OS_VERSION\=15.0
    export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ driverkit\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator
    export BITCODE_GENERATION_MODE\=marker
    export BUILD_ACTIVE_RESOURCES_ONLY\=YES
    export BUILD_COMPONENTS\=headers\ build
    export BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
    export BUILD_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_STYLE\=
    export BUILD_VARIANTS\=normal
    export BUILT_PRODUCTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios
    export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
    export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
    export BUNDLE_FORMAT\=shallow
    export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
    export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
    export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
    export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
    export CACHE_ROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CCHROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CHMOD\=/bin/chmod
    export CHOWN\=/usr/sbin/chown
    export CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED\=YES
    export CLANG_ANALYZER_NONNULL\=YES
    export CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION\=YES_AGGRESSIVE
    export CLANG_CXX_LANGUAGE_STANDARD\=gnu++14
    export CLANG_CXX_LIBRARY\=libc++
    export CLANG_ENABLE_MODULES\=YES
    export CLANG_ENABLE_MODULE_DEBUGGING\=NO
    export CLANG_ENABLE_OBJC_ARC\=YES
    export CLANG_ENABLE_OBJC_WEAK\=YES
    export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
    export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
    export CLANG_WARN_BOOL_CONVERSION\=YES
    export CLANG_WARN_COMMA\=YES
    export CLANG_WARN_CONSTANT_CONVERSION\=YES
    export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
    export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
    export CLANG_WARN_DOCUMENTATION_COMMENTS\=YES
    export CLANG_WARN_EMPTY_BODY\=YES
    export CLANG_WARN_ENUM_CONVERSION\=YES
    export CLANG_WARN_INFINITE_RECURSION\=YES
    export CLANG_WARN_INT_CONVERSION\=YES
    export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
    export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
    export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
    export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
    export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=NO
    export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
    export CLANG_WARN_STRICT_PROTOTYPES\=YES
    export CLANG_WARN_SUSPICIOUS_MOVE\=YES
    export CLANG_WARN_UNGUARDED_AVAILABILITY\=YES_AGGRESSIVE
    export CLANG_WARN_UNREACHABLE_CODE\=YES
    export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
    export CLASS_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/JavaClasses
    export CLEAN_PRECOMPS\=YES
    export CLONE_HEADERS\=NO
    export CODESIGNING_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/liblottie-ios.a
    export CODE_SIGNING_ALLOWED\=NO
    export CODE_SIGNING_REQUIRED\=YES
    export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
    export CODE_SIGN_IDENTITY\=-
    export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
    export COLOR_DIAGNOSTICS\=NO
    export COMBINE_HIDPI_IMAGES\=NO
    export COMPILER_INDEX_STORE_ENABLE\=Default
    export COMPOSITE_SDK_DIRS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/CompositeSDKs
    export COMPRESS_PNG_FILES\=YES
    export CONFIGURATION\=Debug
    export CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios
    export CONFIGURATION_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator
    export COPYING_PRESERVES_HFS_DATA\=NO
    export COPY_HEADERS_RUN_UNIFDEF\=NO
    export COPY_PHASE_STRIP\=NO
    export COPY_RESOURCES_FROM_STATIC_FRAMEWORKS\=YES
    export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
    export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
    export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS15.0.sdk
    export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos15.0
    export CP\=/bin/cp
    export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
    export CURRENT_ARCH\=undefined_arch
    export CURRENT_VARIANT\=normal
    export DEAD_CODE_STRIPPING\=YES
    export DEBUGGING_SYMBOLS\=YES
    export DEBUG_INFORMATION_FORMAT\=dwarf
    export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
    export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export DEFINES_MODULE\=NO
    export DEPLOYMENT_LOCATION\=NO
    export DEPLOYMENT_POSTPROCESSING\=NO
    export DEPLOYMENT_TARGET_CLANG_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_CLANG_FLAG_NAME\=mios-simulator-version-min
    export DEPLOYMENT_TARGET_CLANG_FLAG_PREFIX\=-mios-simulator-version-min\=
    export DEPLOYMENT_TARGET_LD_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_LD_FLAG_NAME\=ios_simulator_version_min
    export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=9.0\ 9.1\ 9.2\ 9.3\ 10.0\ 10.1\ 10.2\ 10.3\ 11.0\ 11.1\ 11.2\ 11.3\ 11.4\ 12.0\ 12.1\ 12.2\ 12.3\ 12.4\ 13.0\ 13.1\ 13.2\ 13.3\ 13.4\ 13.5\ 13.6\ 14.0\ 14.1\ 14.2\ 14.3\ 14.4\ 14.5\ 14.6\ 14.7\ 15.0
    export DERIVED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/DerivedSources
    export DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/DerivedSources
    export DERIVED_SOURCES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/DerivedSources
    export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
    export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
    export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
    export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export DEVELOPMENT_LANGUAGE\=en
    export DONT_GENERATE_INFOPLIST_FILE\=NO
    export DO_HEADER_SCANNING_IN_JAM\=NO
    export DSTROOT\=/tmp/Pods.dst
    export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export DWARF_DSYM_FILE_NAME\=liblottie-ios.a.dSYM
    export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
    export DWARF_DSYM_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios
    export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
    export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
    export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
    export ENABLE_APP_SANDBOX\=NO
    export ENABLE_BITCODE\=NO
    export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
    export ENABLE_HARDENED_RUNTIME\=NO
    export ENABLE_HEADER_DEPENDENCIES\=YES
    export ENABLE_ON_DEMAND_RESOURCES\=NO
    export ENABLE_PREVIEWS\=NO
    export ENABLE_STRICT_OBJC_MSGSEND\=YES
    export ENABLE_TESTABILITY\=YES
    export ENABLE_TESTING_SEARCH_PATHS\=NO
    export ENTITLEMENTS_DESTINATION\=__entitlements
    export ENTITLEMENTS_REQUIRED\=YES
    export EXCLUDED_ARCHS\=arm64\ 
    export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
    export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
    export EXECUTABLE_EXTENSION\=a
    export EXECUTABLE_NAME\=liblottie-ios.a
    export EXECUTABLE_PATH\=liblottie-ios.a
    export EXECUTABLE_PREFIX\=lib
    export EXECUTABLE_SUFFIX\=.a
    export FILE_LIST\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects/LinkFileList
    export FIXED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/FixedFiles
    export FRAMEWORK_FLAG_PREFIX\=-framework
    export FRAMEWORK_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios\ 
    export FRAMEWORK_VERSION\=A
    export FULL_PRODUCT_NAME\=liblottie-ios.a
    export GCC3_VERSION\=3.3
    export GCC_C_LANGUAGE_STANDARD\=gnu11
    export GCC_DYNAMIC_NO_PIC\=NO
    export GCC_NO_COMMON_BLOCKS\=YES
    export GCC_OBJC_LEGACY_DISPATCH\=YES
    export GCC_OPTIMIZATION_LEVEL\=0
    export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
    export GCC_PREFIX_HEADER\=Target\ Support\ Files/lottie-ios/lottie-ios-prefix.pch
    export GCC_PREPROCESSOR_DEFINITIONS\=POD_CONFIGURATION_DEBUG\=1\ DEBUG\=1\ \ COCOAPODS\=1
    export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
    export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
    export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
    export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
    export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
    export GCC_WARN_UNDECLARED_SELECTOR\=YES
    export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
    export GCC_WARN_UNUSED_FUNCTION\=YES
    export GCC_WARN_UNUSED_VARIABLE\=YES
    export GENERATED_MODULEMAP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
    export GENERATE_INFOPLIST_FILE\=NO
    export GENERATE_MASTER_OBJECT_FILE\=NO
    export GENERATE_PKGINFO_FILE\=NO
    export GENERATE_PROFILING_CODE\=NO
    export GENERATE_TEXT_BASED_STUBS\=NO
    export GID\=20
    export GROUP\=staff
    export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
    export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
    export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
    export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
    export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
    export HEADERMAP_USES_VFS\=NO
    export HEADER_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/include\ 
    export HIDE_BITCODE_SYMBOLS\=YES
    export HOME\=/Users/carolaineviana
    export ICONV\=/usr/bin/iconv
    export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
    export INFOPLIST_OUTPUT_FORMAT\=binary
    export INFOPLIST_PREPROCESS\=NO
    export INLINE_PRIVATE_FRAMEWORKS\=NO
    export INSTALLHDRS_COPY_PHASE\=NO
    export INSTALLHDRS_SCRIPT_PHASE\=NO
    export INSTALL_DIR\=/tmp/Pods.dst/usr/local/lib
    export INSTALL_GROUP\=staff
    export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
    export INSTALL_OWNER\=carolaineviana
    export INSTALL_PATH\=/usr/local/lib
    export INSTALL_ROOT\=/tmp/Pods.dst
    export IPHONEOS_DEPLOYMENT_TARGET\=9.0
    export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
    export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
    export JAVA_ARCHIVE_CLASSES\=YES
    export JAVA_ARCHIVE_TYPE\=JAR
    export JAVA_COMPILER\=/usr/bin/javac
    export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
    export JAVA_JAR_FLAGS\=cv
    export JAVA_SOURCE_SUBDIR\=.
    export JAVA_USE_DEPENDENCIES\=YES
    export JAVA_ZIP_FLAGS\=-urg
    export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
    export KEEP_PRIVATE_EXTERNS\=NO
    export LD_DEPENDENCY_INFO_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects-normal/undefined_arch/lottie-ios_dependency_info.dat
    export LD_GENERATE_MAP_FILE\=NO
    export LD_MAP_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/lottie-ios-LinkMap-normal-undefined_arch.txt
    export LD_NO_PIE\=NO
    export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
    export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
    export LEX\=lex
    export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
    export LIBRARY_FLAG_NOSPACE\=YES
    export LIBRARY_FLAG_PREFIX\=-l
    export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
    export LIBRARY_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios\ 
    export LINKER_DISPLAYS_MANGLED_NAMES\=NO
    export LINK_FILE_LIST_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects-normal/x86_64/lottie-ios.LinkFileList
    export LINK_WITH_STANDARD_LIBRARIES\=YES
    export LLVM_TARGET_TRIPLE_OS_VERSION\=ios9.0
    export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
    export LLVM_TARGET_TRIPLE_VENDOR\=apple
    export LOCALIZATION_EXPORT_SUPPORTED\=YES
    export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
    export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
    export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
    export LOCAL_APPS_DIR\=/Applications
    export LOCAL_DEVELOPER_DIR\=/Library/Developer
    export LOCAL_LIBRARY_DIR\=/Library
    export LOCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LOCSYMROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export MACH_O_TYPE\=staticlib
    export MAC_OS_X_PRODUCT_BUILD_VERSION\=20G71
    export MAC_OS_X_VERSION_ACTUAL\=110500
    export MAC_OS_X_VERSION_MAJOR\=110000
    export MAC_OS_X_VERSION_MINOR\=110500
    export METAL_LIBRARY_FILE_BASE\=default
    export METAL_LIBRARY_OUTPUT_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/
    export MODULEMAP_FILE\=Headers/Public/Lottie/lottie-ios.modulemap
    export MODULE_CACHE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
    export MTL_ENABLE_DEBUG_INFO\=INCLUDE_SOURCE
    export MTL_FAST_MATH\=YES
    export NATIVE_ARCH\=x86_64
    export NATIVE_ARCH_32_BIT\=i386
    export NATIVE_ARCH_64_BIT\=x86_64
    export NATIVE_ARCH_ACTUAL\=x86_64
    export NO_COMMON\=YES
    export OBJC_ABI_VERSION\=2
    export OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects
    export OBJECT_FILE_DIR_normal\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects-normal
    export OBJROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export ONLY_ACTIVE_ARCH\=YES
    export OS\=MACOS
    export OSAC\=/usr/bin/osacompile
    export OTHER_SWIFT_FLAGS\=\ -D\ COCOAPODS\ -import-underlying-module\ -Xcc\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Lottie/lottie-ios.modulemap\"
    export PACKAGE_TYPE\=com.apple.package-type.static-library
    export PASCAL_STRINGS\=YES
    export PATH\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/T/yarn--1639449488047-0.606493938614225:/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/.bin:/Users/carolaineviana/.config/yarn/link/node_modules/.bin:/usr/local/Cellar/node/16.7.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/bin/node_modules/npm/bin/node-gyp-bin:/Users/carolaineviana/.amplify/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
    export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
    export PER_ARCH_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects-normal/undefined_arch
    export PER_VARIANT_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects-normal
    export PKGINFO_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/PkgInfo
    export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
    export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
    export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
    export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
    export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
    export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
    export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
    export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
    export PLATFORM_FAMILY_NAME\=iOS
    export PLATFORM_NAME\=iphonesimulator
    export PLATFORM_PREFERRED_ARCH\=x86_64
    export PLATFORM_PRODUCT_BUILD_VERSION\=19A339
    export PLIST_FILE_OUTPUT_FORMAT\=binary
    export PODS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export PODS_CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator
    export PODS_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PODS_TARGET_SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/lottie-ios
    export PODS_XCFRAMEWORKS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates
    export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
    export PRECOMP_DESTINATION_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/PrefixHeaders
    export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
    export PRODUCT_BUNDLE_IDENTIFIER\=org.cocoapods.lottie-ios
    export PRODUCT_MODULE_NAME\=Lottie
    export PRODUCT_NAME\=lottie-ios
    export PRODUCT_SETTINGS_PATH\=
    export PRODUCT_TYPE\=com.apple.product-type.library.static
    export PROFILING_CODE\=NO
    export PROJECT\=Pods
    export PROJECT_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/DerivedSources
    export PROJECT_DIR\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PROJECT_FILE_PATH\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Pods.xcodeproj
    export PROJECT_NAME\=Pods
    export PROJECT_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build
    export PROJECT_TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
    export REMOVE_CVS_FROM_RESOURCES\=YES
    export REMOVE_GIT_FROM_RESOURCES\=YES
    export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
    export REMOVE_HG_FROM_RESOURCES\=YES
    export REMOVE_SVN_FROM_RESOURCES\=YES
    export REZ_COLLECTOR_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/ResourceManagerResources
    export REZ_EXECUTABLE\=YES
    export REZ_OBJECTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/ResourceManagerResources/Objects
    export REZ_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios\ 
    export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
    export SCRIPT_INPUT_FILE_0\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/DerivedSources/Lottie-Swift.h
    export SCRIPT_INPUT_FILE_1\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Lottie/lottie-ios.modulemap
    export SCRIPT_INPUT_FILE_2\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Lottie/lottie-ios-umbrella.h
    export SCRIPT_INPUT_FILE_COUNT\=3
    export SCRIPT_INPUT_FILE_LIST_COUNT\=0
    export SCRIPT_OUTPUT_FILE_0\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap
    export SCRIPT_OUTPUT_FILE_1\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/lottie-ios-umbrella.h
    export SCRIPT_OUTPUT_FILE_2\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Swift\ Compatibility\ Header/Lottie-Swift.h
    export SCRIPT_OUTPUT_FILE_COUNT\=3
    export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator15_0\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_NAME\=iphonesimulator15.0
    export SDK_NAMES\=iphonesimulator15.0
    export SDK_PRODUCT_BUILD_VERSION\=19A339
    export SDK_VERSION\=15.0
    export SDK_VERSION_ACTUAL\=150000
    export SDK_VERSION_MAJOR\=150000
    export SDK_VERSION_MINOR\=150000
    export SED\=/usr/bin/sed
    export SEPARATE_STRIP\=NO
    export SEPARATE_SYMBOL_EDIT\=NO
    export SET_DIR_MODE_OWNER_GROUP\=YES
    export SET_FILE_MODE_OWNER_GROUP\=NO
    export SHALLOW_BUNDLE\=NO
    export SHARED_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/DerivedSources
    export SHARED_PRECOMPS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/PrecompiledHeaders
    export SKIP_INSTALL\=YES
    export SOURCE_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export STRINGSDATA_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects-normal/undefined_arch
    export STRINGSDATA_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build
    export STRINGS_FILE_INFOPLIST_RENAME\=YES
    export STRINGS_FILE_OUTPUT_ENCODING\=binary
    export STRIP_BITCODE_FROM_COPIED_FILES\=NO
    export STRIP_INSTALLED_PRODUCT\=NO
    export STRIP_STYLE\=debugging
    export STRIP_SWIFT_SYMBOLS\=YES
    export SUPPORTED_DEVICE_FAMILIES\=1,2
    export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
    export SUPPORTS_TEXT_BASED_API\=NO
    export SWIFT_ACTIVE_COMPILATION_CONDITIONS\=DEBUG\ 
    export SWIFT_EMIT_LOC_STRINGS\=NO
    export SWIFT_OPTIMIZATION_LEVEL\=-Onone
    export SWIFT_PLATFORM_TARGET_PREFIX\=ios
    export SWIFT_RESPONSE_FILE_PATH_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Objects-normal/x86_64/lottie-ios.SwiftFileList
    export SWIFT_VERSION\=5.0
    export SYMROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
    export SYSTEM_APPS_DIR\=/Applications
    export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
    export SYSTEM_DEMOS_DIR\=/Applications/Extras
    export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
    export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
    export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
    export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
    export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
    export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
    export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
    export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
    export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
    export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
    export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
    export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export SYSTEM_LIBRARY_DIR\=/System/Library
    export TAPI_VERIFY_MODE\=ErrorsOnly
    export TARGETED_DEVICE_FAMILY\=1,2
    export TARGETNAME\=lottie-ios
    export TARGET_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios
    export TARGET_DEVICE_IDENTIFIER\=24858D51-ABE5-4467-BF73-4791FBCD9CF3
    export TARGET_DEVICE_MODEL\=iPhone13,3
    export TARGET_DEVICE_OS_VERSION\=15.0
    export TARGET_DEVICE_PLATFORM_NAME\=iphonesimulator
    export TARGET_NAME\=lottie-ios
    export TARGET_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build
    export TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build
    export TEMP_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build
    export TEMP_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build
    export TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk/Developer/Library/Frameworks
    export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
    export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
    export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
    export UID\=501
    export UNSTRIPPED_PRODUCT\=NO
    export USER\=carolaineviana
    export USER_APPS_DIR\=/Users/carolaineviana/Applications
    export USER_LIBRARY_DIR\=/Users/carolaineviana/Library
    export USE_DYNAMIC_NO_PIC\=YES
    export USE_HEADERMAP\=YES
    export USE_HEADER_SYMLINKS\=NO
    export USE_LLVM_TARGET_TRIPLES\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_CLANG\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_LD\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_TAPI\=YES
    export USE_RECURSIVE_SCRIPT_INPUTS_IN_SCRIPT_PHASES\=YES
    export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
    export VALIDATE_PRODUCT\=NO
    export VALIDATE_WORKSPACE\=YES_ERROR
    export VALID_ARCHS\=arm64\ arm64e\ i386\ x86_64
    export VERBOSE_PBXCP\=NO
    export VERSION_INFO_BUILDER\=carolaineviana
    export VERSION_INFO_FILE\=lottie-ios_vers.c
    export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:lottie-ios\ \ PROJECT:Pods-\"
    export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
    export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
    export XCODE_PRODUCT_BUILD_VERSION\=13A1030d
    export XCODE_VERSION_ACTUAL\=1310
    export XCODE_VERSION_MAJOR\=1300
    export XCODE_VERSION_MINOR\=1310
    export XPCSERVICES_FOLDER_PATH\=/XPCServices
    export YACC\=yacc
    export arch\=undefined_arch
    export variant\=normal
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-ios.build/Script-5E398E9F7266CAFD26D88CE175D9EC72.sh

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXSplashScreen.build/Script-A7D29ECADB699A17BF1C2B613996CF3C.sh (in target 'EXSplashScreen' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXSplashScreen.build/Script-A7D29ECADB699A17BF1C2B613996CF3C.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-splash-screen/ios/EXSplashScreen.xcframework/ios-arm64_x86_64-simulator/*" "/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXSplashScreen"
building file list ... done

sent 151 bytes  received 20 bytes  342.00 bytes/sec
total size is 174181  speedup is 1018.60
Copied /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-splash-screen/ios/EXSplashScreen.xcframework/ios-arm64_x86_64-simulator to /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXSplashScreen

PhaseScriptExecution [CP]\ Copy\ XCFrameworks /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFileSystem.build/Script-7F60DB7F1E08EB170D1303BE90A1F785.sh (in target 'EXFileSystem' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFileSystem.build/Script-7F60DB7F1E08EB170D1303BE90A1F785.sh
Selected xcframework slice ios-arm64_x86_64-simulator
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" "/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-file-system/ios/EXFileSystem.xcframework/ios-arm64_x86_64-simulator/*" "/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXFileSystem"
building file list ... done

sent 208 bytes  received 20 bytes  456.00 bytes/sec
total size is 489609  speedup is 2147.41
Copied /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-file-system/ios/EXFileSystem.xcframework/ios-arm64_x86_64-simulator to /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXFileSystem

PhaseScriptExecution [CP-User]\ Generate\ Specs /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Script-03FB22271F50B08DB9CB11189128A959.sh (in target 'FBReactNativeSpec' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export ACTION\=build
    export AD_HOC_CODE_SIGNING_ALLOWED\=YES
    export ALLOW_TARGET_PLATFORM_SPECIALIZATION\=NO
    export ALTERNATE_GROUP\=staff
    export ALTERNATE_MODE\=u+w,go-w,a+rX
    export ALTERNATE_OWNER\=carolaineviana
    export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=NO
    export ALWAYS_SEARCH_USER_PATHS\=NO
    export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
    export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
    export APPLE_INTERNAL_DIR\=/AppleInternal
    export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
    export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
    export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
    export APPLICATION_EXTENSION_API_ONLY\=NO
    export APPLY_RULES_IN_COPY_FILES\=NO
    export APPLY_RULES_IN_COPY_HEADERS\=NO
    export ARCHS\=x86_64
    export ARCHS_STANDARD\=arm64\ x86_64\ i386
    export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
    export ARCHS_STANDARD_32_BIT\=i386
    export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
    export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64\ i386
    export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
    export ASSETCATALOG_FILTER_FOR_DEVICE_MODEL\=iPhone13,3
    export ASSETCATALOG_FILTER_FOR_DEVICE_OS_VERSION\=15.0
    export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ driverkit\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator
    export BITCODE_GENERATION_MODE\=marker
    export BUILD_ACTIVE_RESOURCES_ONLY\=YES
    export BUILD_COMPONENTS\=headers\ build
    export BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
    export BUILD_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_STYLE\=
    export BUILD_VARIANTS\=normal
    export BUILT_PRODUCTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec
    export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
    export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
    export BUNDLE_FORMAT\=shallow
    export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
    export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
    export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
    export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
    export CACHE_ROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CCHROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CHMOD\=/bin/chmod
    export CHOWN\=/usr/sbin/chown
    export CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED\=YES
    export CLANG_ANALYZER_NONNULL\=YES
    export CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION\=YES_AGGRESSIVE
    export CLANG_CXX_LANGUAGE_STANDARD\=c++14
    export CLANG_CXX_LIBRARY\=libc++
    export CLANG_ENABLE_MODULES\=YES
    export CLANG_ENABLE_MODULE_DEBUGGING\=NO
    export CLANG_ENABLE_OBJC_ARC\=YES
    export CLANG_ENABLE_OBJC_WEAK\=NO
    export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
    export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
    export CLANG_WARN_BOOL_CONVERSION\=YES
    export CLANG_WARN_COMMA\=YES
    export CLANG_WARN_CONSTANT_CONVERSION\=YES
    export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
    export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
    export CLANG_WARN_DOCUMENTATION_COMMENTS\=YES
    export CLANG_WARN_EMPTY_BODY\=YES
    export CLANG_WARN_ENUM_CONVERSION\=YES
    export CLANG_WARN_INFINITE_RECURSION\=YES
    export CLANG_WARN_INT_CONVERSION\=YES
    export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
    export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
    export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
    export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
    export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=NO
    export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
    export CLANG_WARN_STRICT_PROTOTYPES\=YES
    export CLANG_WARN_SUSPICIOUS_MOVE\=YES
    export CLANG_WARN_UNGUARDED_AVAILABILITY\=YES_AGGRESSIVE
    export CLANG_WARN_UNREACHABLE_CODE\=YES
    export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
    export CLASS_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/JavaClasses
    export CLEAN_PRECOMPS\=YES
    export CLONE_HEADERS\=NO
    export CODESIGNING_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec/libFBReactNativeSpec.a
    export CODE_SIGNING_ALLOWED\=NO
    export CODE_SIGNING_REQUIRED\=YES
    export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
    export CODE_SIGN_IDENTITY\=-
    export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
    export COLOR_DIAGNOSTICS\=NO
    export COMBINE_HIDPI_IMAGES\=NO
    export COMPILER_INDEX_STORE_ENABLE\=Default
    export COMPOSITE_SDK_DIRS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/CompositeSDKs
    export COMPRESS_PNG_FILES\=YES
    export CONFIGURATION\=Debug
    export CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec
    export CONFIGURATION_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator
    export COPYING_PRESERVES_HFS_DATA\=NO
    export COPY_HEADERS_RUN_UNIFDEF\=NO
    export COPY_PHASE_STRIP\=NO
    export COPY_RESOURCES_FROM_STATIC_FRAMEWORKS\=YES
    export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
    export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
    export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS15.0.sdk
    export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos15.0
    export CP\=/bin/cp
    export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
    export CURRENT_ARCH\=undefined_arch
    export CURRENT_VARIANT\=normal
    export DEAD_CODE_STRIPPING\=YES
    export DEBUGGING_SYMBOLS\=YES
    export DEBUG_INFORMATION_FORMAT\=dwarf
    export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
    export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export DEFINES_MODULE\=NO
    export DEPLOYMENT_LOCATION\=NO
    export DEPLOYMENT_POSTPROCESSING\=NO
    export DEPLOYMENT_TARGET_CLANG_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_CLANG_FLAG_NAME\=mios-simulator-version-min
    export DEPLOYMENT_TARGET_CLANG_FLAG_PREFIX\=-mios-simulator-version-min\=
    export DEPLOYMENT_TARGET_LD_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_LD_FLAG_NAME\=ios_simulator_version_min
    export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=9.0\ 9.1\ 9.2\ 9.3\ 10.0\ 10.1\ 10.2\ 10.3\ 11.0\ 11.1\ 11.2\ 11.3\ 11.4\ 12.0\ 12.1\ 12.2\ 12.3\ 12.4\ 13.0\ 13.1\ 13.2\ 13.3\ 13.4\ 13.5\ 13.6\ 14.0\ 14.1\ 14.2\ 14.3\ 14.4\ 14.5\ 14.6\ 14.7\ 15.0
    export DERIVED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/DerivedSources
    export DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/DerivedSources
    export DERIVED_SOURCES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/DerivedSources
    export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
    export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
    export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
    export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export DEVELOPMENT_LANGUAGE\=en
    export DONT_GENERATE_INFOPLIST_FILE\=NO
    export DO_HEADER_SCANNING_IN_JAM\=NO
    export DSTROOT\=/tmp/Pods.dst
    export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export DWARF_DSYM_FILE_NAME\=libFBReactNativeSpec.a.dSYM
    export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
    export DWARF_DSYM_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec
    export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
    export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
    export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
    export ENABLE_APP_SANDBOX\=NO
    export ENABLE_BITCODE\=NO
    export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
    export ENABLE_HARDENED_RUNTIME\=NO
    export ENABLE_HEADER_DEPENDENCIES\=YES
    export ENABLE_ON_DEMAND_RESOURCES\=NO
    export ENABLE_PREVIEWS\=NO
    export ENABLE_STRICT_OBJC_MSGSEND\=YES
    export ENABLE_TESTABILITY\=YES
    export ENABLE_TESTING_SEARCH_PATHS\=NO
    export ENTITLEMENTS_DESTINATION\=__entitlements
    export ENTITLEMENTS_REQUIRED\=YES
    export EXCLUDED_ARCHS\=arm64\ 
    export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
    export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
    export EXECUTABLE_EXTENSION\=a
    export EXECUTABLE_NAME\=libFBReactNativeSpec.a
    export EXECUTABLE_PATH\=libFBReactNativeSpec.a
    export EXECUTABLE_PREFIX\=lib
    export EXECUTABLE_SUFFIX\=.a
    export FILE_LIST\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects/LinkFileList
    export FIXED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/FixedFiles
    export FRAMEWORK_FLAG_PREFIX\=-framework
    export FRAMEWORK_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec\ 
    export FRAMEWORK_VERSION\=A
    export FULL_PRODUCT_NAME\=libFBReactNativeSpec.a
    export GCC3_VERSION\=3.3
    export GCC_C_LANGUAGE_STANDARD\=gnu11
    export GCC_DYNAMIC_NO_PIC\=NO
    export GCC_NO_COMMON_BLOCKS\=YES
    export GCC_OBJC_LEGACY_DISPATCH\=YES
    export GCC_OPTIMIZATION_LEVEL\=0
    export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
    export GCC_PREFIX_HEADER\=Target\ Support\ Files/FBReactNativeSpec/FBReactNativeSpec-prefix.pch
    export GCC_PREPROCESSOR_DEFINITIONS\=POD_CONFIGURATION_DEBUG\=1\ DEBUG\=1\ \ COCOAPODS\=1
    export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
    export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
    export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
    export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
    export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
    export GCC_WARN_UNDECLARED_SELECTOR\=YES
    export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
    export GCC_WARN_UNUSED_FUNCTION\=YES
    export GCC_WARN_UNUSED_VARIABLE\=YES
    export GENERATED_MODULEMAP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
    export GENERATE_INFOPLIST_FILE\=NO
    export GENERATE_MASTER_OBJECT_FILE\=NO
    export GENERATE_PKGINFO_FILE\=NO
    export GENERATE_PROFILING_CODE\=NO
    export GENERATE_TEXT_BASED_STUBS\=NO
    export GID\=20
    export GROUP\=staff
    export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
    export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
    export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
    export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
    export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
    export HEADERMAP_USES_VFS\=NO
    export HEADER_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec/include\ \ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/FBReactNativeSpec\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/FBLazyVector\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/FBReactNativeSpec\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCTRequired\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCTTypeSafety\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ReactCommon\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/react-native/React/FBReactNativeSpec/React/FBReactNativeSpec\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/RCT-Folly\"
    export HIDE_BITCODE_SYMBOLS\=YES
    export HOME\=/Users/carolaineviana
    export ICONV\=/usr/bin/iconv
    export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
    export INFOPLIST_OUTPUT_FORMAT\=binary
    export INFOPLIST_PREPROCESS\=NO
    export INLINE_PRIVATE_FRAMEWORKS\=NO
    export INSTALLHDRS_COPY_PHASE\=NO
    export INSTALLHDRS_SCRIPT_PHASE\=NO
    export INSTALL_DIR\=/tmp/Pods.dst/usr/local/lib
    export INSTALL_GROUP\=staff
    export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
    export INSTALL_OWNER\=carolaineviana
    export INSTALL_PATH\=/usr/local/lib
    export INSTALL_ROOT\=/tmp/Pods.dst
    export IPHONEOS_DEPLOYMENT_TARGET\=10.0
    export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
    export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
    export JAVA_ARCHIVE_CLASSES\=YES
    export JAVA_ARCHIVE_TYPE\=JAR
    export JAVA_COMPILER\=/usr/bin/javac
    export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
    export JAVA_JAR_FLAGS\=cv
    export JAVA_SOURCE_SUBDIR\=.
    export JAVA_USE_DEPENDENCIES\=YES
    export JAVA_ZIP_FLAGS\=-urg
    export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
    export KEEP_PRIVATE_EXTERNS\=NO
    export LD_DEPENDENCY_INFO_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects-normal/undefined_arch/FBReactNativeSpec_dependency_info.dat
    export LD_GENERATE_MAP_FILE\=NO
    export LD_MAP_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/FBReactNativeSpec-LinkMap-normal-undefined_arch.txt
    export LD_NO_PIE\=NO
    export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
    export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
    export LEX\=lex
    export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
    export LIBRARY_FLAG_NOSPACE\=YES
    export LIBRARY_FLAG_PREFIX\=-l
    export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
    export LIBRARY_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec\ 
    export LINKER_DISPLAYS_MANGLED_NAMES\=NO
    export LINK_FILE_LIST_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects-normal/x86_64/FBReactNativeSpec.LinkFileList
    export LINK_WITH_STANDARD_LIBRARIES\=YES
    export LLVM_TARGET_TRIPLE_OS_VERSION\=ios10.0
    export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
    export LLVM_TARGET_TRIPLE_VENDOR\=apple
    export LOCALIZATION_EXPORT_SUPPORTED\=YES
    export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
    export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
    export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
    export LOCAL_APPS_DIR\=/Applications
    export LOCAL_DEVELOPER_DIR\=/Library/Developer
    export LOCAL_LIBRARY_DIR\=/Library
    export LOCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LOCSYMROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export MACH_O_TYPE\=staticlib
    export MAC_OS_X_PRODUCT_BUILD_VERSION\=20G71
    export MAC_OS_X_VERSION_ACTUAL\=110500
    export MAC_OS_X_VERSION_MAJOR\=110000
    export MAC_OS_X_VERSION_MINOR\=110500
    export METAL_LIBRARY_FILE_BASE\=default
    export METAL_LIBRARY_OUTPUT_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec/
    export MODULE_CACHE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
    export MTL_ENABLE_DEBUG_INFO\=INCLUDE_SOURCE
    export MTL_FAST_MATH\=YES
    export NATIVE_ARCH\=x86_64
    export NATIVE_ARCH_32_BIT\=i386
    export NATIVE_ARCH_64_BIT\=x86_64
    export NATIVE_ARCH_ACTUAL\=x86_64
    export NO_COMMON\=YES
    export OBJC_ABI_VERSION\=2
    export OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects
    export OBJECT_FILE_DIR_normal\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects-normal
    export OBJROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export ONLY_ACTIVE_ARCH\=YES
    export OS\=MACOS
    export OSAC\=/usr/bin/osacompile
    export OTHER_CFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export OTHER_CPLUSPLUSFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export PACKAGE_TYPE\=com.apple.package-type.static-library
    export PASCAL_STRINGS\=YES
    export PATH\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/T/yarn--1639449488047-0.606493938614225:/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/.bin:/Users/carolaineviana/.config/yarn/link/node_modules/.bin:/usr/local/Cellar/node/16.7.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/bin/node_modules/npm/bin/node-gyp-bin:/Users/carolaineviana/.amplify/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
    export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
    export PER_ARCH_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects-normal/undefined_arch
    export PER_VARIANT_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects-normal
    export PKGINFO_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/PkgInfo
    export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
    export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
    export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
    export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
    export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
    export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
    export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
    export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
    export PLATFORM_FAMILY_NAME\=iOS
    export PLATFORM_NAME\=iphonesimulator
    export PLATFORM_PREFERRED_ARCH\=x86_64
    export PLATFORM_PRODUCT_BUILD_VERSION\=19A339
    export PLIST_FILE_OUTPUT_FORMAT\=binary
    export PODS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export PODS_CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator
    export PODS_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PODS_TARGET_SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/react-native/React/FBReactNativeSpec
    export PODS_XCFRAMEWORKS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates
    export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
    export PRECOMP_DESTINATION_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/PrefixHeaders
    export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
    export PRODUCT_BUNDLE_IDENTIFIER\=org.cocoapods.FBReactNativeSpec
    export PRODUCT_MODULE_NAME\=FBReactNativeSpec
    export PRODUCT_NAME\=FBReactNativeSpec
    export PRODUCT_SETTINGS_PATH\=
    export PRODUCT_TYPE\=com.apple.product-type.library.static
    export PROFILING_CODE\=NO
    export PROJECT\=Pods
    export PROJECT_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/DerivedSources
    export PROJECT_DIR\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PROJECT_FILE_PATH\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Pods.xcodeproj
    export PROJECT_NAME\=Pods
    export PROJECT_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build
    export PROJECT_TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
    export REMOVE_CVS_FROM_RESOURCES\=YES
    export REMOVE_GIT_FROM_RESOURCES\=YES
    export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
    export REMOVE_HG_FROM_RESOURCES\=YES
    export REMOVE_SVN_FROM_RESOURCES\=YES
    export REZ_COLLECTOR_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/ResourceManagerResources
    export REZ_EXECUTABLE\=YES
    export REZ_OBJECTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/ResourceManagerResources/Objects
    export REZ_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec\ 
    export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
    export SCRIPT_INPUT_FILE_0\=/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/react-native/Libraries
    export SCRIPT_INPUT_FILE_COUNT\=1
    export SCRIPT_INPUT_FILE_LIST_COUNT\=0
    export SCRIPT_OUTPUT_FILE_0\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/DerivedSources/codegen-FBReactNativeSpec.log
    export SCRIPT_OUTPUT_FILE_1\=/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/react-native/React/FBReactNativeSpec/FBReactNativeSpec/FBReactNativeSpec.h
    export SCRIPT_OUTPUT_FILE_2\=/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/react-native/React/FBReactNativeSpec/FBReactNativeSpec/FBReactNativeSpec-generated.mm
    export SCRIPT_OUTPUT_FILE_COUNT\=3
    export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator15_0\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_NAME\=iphonesimulator15.0
    export SDK_NAMES\=iphonesimulator15.0
    export SDK_PRODUCT_BUILD_VERSION\=19A339
    export SDK_VERSION\=15.0
    export SDK_VERSION_ACTUAL\=150000
    export SDK_VERSION_MAJOR\=150000
    export SDK_VERSION_MINOR\=150000
    export SED\=/usr/bin/sed
    export SEPARATE_STRIP\=NO
    export SEPARATE_SYMBOL_EDIT\=NO
    export SET_DIR_MODE_OWNER_GROUP\=YES
    export SET_FILE_MODE_OWNER_GROUP\=NO
    export SHALLOW_BUNDLE\=NO
    export SHARED_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec/DerivedSources
    export SHARED_PRECOMPS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/PrecompiledHeaders
    export SKIP_INSTALL\=YES
    export SOURCE_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export STRINGSDATA_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects-normal/undefined_arch
    export STRINGSDATA_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build
    export STRINGS_FILE_INFOPLIST_RENAME\=YES
    export STRINGS_FILE_OUTPUT_ENCODING\=binary
    export STRIP_BITCODE_FROM_COPIED_FILES\=NO
    export STRIP_INSTALLED_PRODUCT\=NO
    export STRIP_STYLE\=debugging
    export STRIP_SWIFT_SYMBOLS\=YES
    export SUPPORTED_DEVICE_FAMILIES\=1,2
    export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
    export SUPPORTS_TEXT_BASED_API\=NO
    export SWIFT_ACTIVE_COMPILATION_CONDITIONS\=DEBUG\ 
    export SWIFT_EMIT_LOC_STRINGS\=NO
    export SWIFT_OPTIMIZATION_LEVEL\=-Onone
    export SWIFT_PLATFORM_TARGET_PREFIX\=ios
    export SWIFT_RESPONSE_FILE_PATH_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Objects-normal/x86_64/FBReactNativeSpec.SwiftFileList
    export SWIFT_VERSION\=5.0
    export SYMROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
    export SYSTEM_APPS_DIR\=/Applications
    export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
    export SYSTEM_DEMOS_DIR\=/Applications/Extras
    export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
    export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
    export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
    export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
    export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
    export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
    export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
    export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
    export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
    export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
    export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
    export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export SYSTEM_LIBRARY_DIR\=/System/Library
    export TAPI_VERIFY_MODE\=ErrorsOnly
    export TARGETED_DEVICE_FAMILY\=1,2
    export TARGETNAME\=FBReactNativeSpec
    export TARGET_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/FBReactNativeSpec
    export TARGET_DEVICE_IDENTIFIER\=24858D51-ABE5-4467-BF73-4791FBCD9CF3
    export TARGET_DEVICE_MODEL\=iPhone13,3
    export TARGET_DEVICE_OS_VERSION\=15.0
    export TARGET_DEVICE_PLATFORM_NAME\=iphonesimulator
    export TARGET_NAME\=FBReactNativeSpec
    export TARGET_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build
    export TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build
    export TEMP_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build
    export TEMP_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build
    export TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk/Developer/Library/Frameworks
    export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
    export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
    export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
    export UID\=501
    export UNSTRIPPED_PRODUCT\=NO
    export USER\=carolaineviana
    export USER_APPS_DIR\=/Users/carolaineviana/Applications
    export USER_LIBRARY_DIR\=/Users/carolaineviana/Library
    export USE_DYNAMIC_NO_PIC\=YES
    export USE_HEADERMAP\=YES
    export USE_HEADER_SYMLINKS\=NO
    export USE_LLVM_TARGET_TRIPLES\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_CLANG\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_LD\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_TAPI\=YES
    export USE_RECURSIVE_SCRIPT_INPUTS_IN_SCRIPT_PHASES\=YES
    export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
    export VALIDATE_PRODUCT\=NO
    export VALIDATE_WORKSPACE\=YES_ERROR
    export VALID_ARCHS\=arm64\ arm64e\ i386\ x86_64
    export VERBOSE_PBXCP\=NO
    export VERSION_INFO_BUILDER\=carolaineviana
    export VERSION_INFO_FILE\=FBReactNativeSpec_vers.c
    export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:FBReactNativeSpec\ \ PROJECT:Pods-\"
    export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
    export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
    export XCODE_PRODUCT_BUILD_VERSION\=13A1030d
    export XCODE_VERSION_ACTUAL\=1310
    export XCODE_VERSION_MAJOR\=1300
    export XCODE_VERSION_MINOR\=1310
    export XPCSERVICES_FOLDER_PATH\=/XPCServices
    export YACC\=yacc
    export arch\=undefined_arch
    export variant\=normal
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Script-03FB22271F50B08DB9CB11189128A959.sh


>>>>> Generating schema from flow types



ProcessProductPackaging "" /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants-EXConstants.build/EXConstants.bundle-Simulated.xcent (in target 'EXConstants-EXConstants' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    
    Entitlements:
    
    {
    "application-identifier" = "35D6926LQ6.org.cocoapods.EXConstants";
    "keychain-access-groups" =     (
        "35D6926LQ6.org.cocoapods.EXConstants"
    );
}
    
    builtin-productPackagingUtility -entitlements -format xml -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants-EXConstants.build/EXConstants.bundle-Simulated.xcent

ProcessProductPackaging "" /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates-EXUpdates.build/EXUpdates.bundle-Simulated.xcent (in target 'EXUpdates-EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    
    Entitlements:
    
    {
    "application-identifier" = "35D6926LQ6.org.cocoapods.EXUpdates";
    "keychain-access-groups" =     (
        "35D6926LQ6.org.cocoapods.EXUpdates"
    );
}
    
    builtin-productPackagingUtility -entitlements -format xml -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates-EXUpdates.build/EXUpdates.bundle-Simulated.xcent

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecoveryModule.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-error-recovery/ios/EXErrorRecovery/EXErrorRecoveryModule.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXErrorRecovery' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/EXErrorRecovery-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXErrorRecovery/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXErrorRecovery -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXErrorRecovery -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXErrorRecovery -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXErrorRecovery/EXErrorRecovery-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecoveryModule.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecoveryModule.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-error-recovery/ios/EXErrorRecovery/EXErrorRecoveryModule.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecoveryModule.o

ProcessInfoPlistFile /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/EXConstants.bundle/Info.plist /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXConstants/ResourceBundle-EXConstants-EXConstants-Info.plist (in target 'EXConstants-EXConstants' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    builtin-infoPlistUtility /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXConstants/ResourceBundle-EXConstants-EXConstants-Info.plist -producttype com.apple.product-type.bundle -expandbuildsettings -format binary -platform iphonesimulator -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/EXConstants.bundle/Info.plist

ProcessInfoPlistFile /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/EXUpdates.bundle/Info.plist /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/ResourceBundle-EXUpdates-EXUpdates-Info.plist (in target 'EXUpdates-EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    builtin-infoPlistUtility /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/ResourceBundle-EXUpdates-EXUpdates-Info.plist -producttype com.apple.product-type.bundle -expandbuildsettings -format binary -platform iphonesimulator -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/EXUpdates.bundle/Info.plist

CompileSwiftSources normal x86_64 com.apple.xcode.tools.swift.compiler (in target 'lottie-react-native' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swiftc -incremental -module-name lottie_react_native -Onone -enable-batch-mode -enforce-exclusivity\=checked @/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/lottie-react-native.SwiftFileList -DDEBUG -D COCOAPODS -Xcc -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -import-underlying-module -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/lottie_react_native/lottie-react-native.modulemap -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -target x86_64-apple-ios9.0-simulator -g -module-cache-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -Xfrontend -serialize-debugging-options -enable-testing -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -swift-version 5 -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios -F /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -c -j8 -output-file-map /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/lottie-react-native-OutputFileMap.json -parseable-output -serialize-diagnostics -emit-dependencies -emit-module -emit-module-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/lottie_react_native.swiftmodule -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/swift-overrides.hmap -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-generated-files.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-own-target-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-all-non-framework-target-headers.hmap -Xcc -ivfsoverlay -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/all-product-headers.yaml -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-project-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native/include -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/lottie-react-native -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources-normal/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources -Xcc -DPOD_CONFIGURATION_DEBUG\=1 -Xcc -DDEBUG\=1 -Xcc -DCOCOAPODS\=1 -emit-objc-header -emit-objc-header-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/lottie_react_native-Swift.h -working-directory /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
CompileSwift normal x86_64 /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift (in target 'lottie-react-native' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-frontend -frontend -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift -primary-file /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift -emit-module-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor\~partial.swiftmodule -emit-module-doc-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor\~partial.swiftdoc -emit-module-source-info-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor\~partial.swiftsourceinfo -emit-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.d -emit-reference-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.swiftdeps -serialize-diagnostics-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.dia -target x86_64-apple-ios9.0-simulator -enable-objc-interop -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios -F /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -enable-testing -g -import-underlying-module -module-cache-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -swift-version 5 -enforce-exclusivity\=checked -Onone -D DEBUG -D COCOAPODS -new-driver-path /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-driver -serialize-debugging-options -Xcc -working-directory -Xcc /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift -enable-anonymous-context-mangled-names -Xcc -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/lottie_react_native/lottie-react-native.modulemap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/swift-overrides.hmap -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-generated-files.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-own-target-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-all-non-framework-target-headers.hmap -Xcc -ivfsoverlay -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/all-product-headers.yaml -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-project-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native/include -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/lottie-react-native -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources-normal/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources -Xcc -DPOD_CONFIGURATION_DEBUG\=1 -Xcc -DDEBUG\=1 -Xcc -DCOCOAPODS\=1 -module-name lottie_react_native -target-sdk-version 15.0.0 -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/hexStringToColor.o -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -index-system-modules

CompileSwift normal x86_64 /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift (in target 'lottie-react-native' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-frontend -frontend -c -primary-file /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift -emit-module-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule\~partial.swiftmodule -emit-module-doc-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule\~partial.swiftdoc -emit-module-source-info-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule\~partial.swiftsourceinfo -emit-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.d -emit-reference-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.swiftdeps -serialize-diagnostics-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.dia -target x86_64-apple-ios9.0-simulator -enable-objc-interop -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios -F /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -enable-testing -g -import-underlying-module -module-cache-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -swift-version 5 -enforce-exclusivity\=checked -Onone -D DEBUG -D COCOAPODS -new-driver-path /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-driver -serialize-debugging-options -Xcc -working-directory -Xcc /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift -enable-anonymous-context-mangled-names -Xcc -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/lottie_react_native/lottie-react-native.modulemap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/swift-overrides.hmap -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-generated-files.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-own-target-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-all-non-framework-target-headers.hmap -Xcc -ivfsoverlay -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/all-product-headers.yaml -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-project-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native/include -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/lottie-react-native -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources-normal/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources -Xcc -DPOD_CONFIGURATION_DEBUG\=1 -Xcc -DDEBUG\=1 -Xcc -DCOCOAPODS\=1 -module-name lottie_react_native -target-sdk-version 15.0.0 -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/AnimationViewManagerModule.o -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -index-system-modules

CompileSwift normal x86_64 /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift (in target 'lottie-react-native' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-frontend -frontend -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/AnimationViewManagerModule.swift -primary-file /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/ContainerView.swift /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/lottie-react-native/src/ios/LottieReactNative/hexStringToColor.swift -emit-module-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView\~partial.swiftmodule -emit-module-doc-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView\~partial.swiftdoc -emit-module-source-info-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView\~partial.swiftsourceinfo -emit-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.d -emit-reference-dependencies-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.swiftdeps -serialize-diagnostics-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.dia -target x86_64-apple-ios9.0-simulator -enable-objc-interop -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -I /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios -F /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native -enable-testing -g -import-underlying-module -module-cache-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -swift-version 5 -enforce-exclusivity\=checked -Onone -D DEBUG -D COCOAPODS -new-driver-path /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift-driver -serialize-debugging-options -Xcc -working-directory -Xcc /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift -enable-anonymous-context-mangled-names -Xcc -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-ios/Lottie.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -Xcc -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/lottie_react_native/lottie-react-native.modulemap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/swift-overrides.hmap -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-generated-files.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-own-target-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-all-non-framework-target-headers.hmap -Xcc -ivfsoverlay -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/all-product-headers.yaml -Xcc -iquote -Xcc /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/lottie-react-native-project-headers.hmap -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/lottie-react-native/include -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/lottie-react-native -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -Xcc -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources-normal/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources/x86_64 -Xcc -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/DerivedSources -Xcc -DPOD_CONFIGURATION_DEBUG\=1 -Xcc -DDEBUG\=1 -Xcc -DCOCOAPODS\=1 -module-name lottie_react_native -target-sdk-version 15.0.0 -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/lottie-react-native.build/Objects-normal/x86_64/ContainerView.o -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -index-system-modules

Command CompileSwiftSources failed with a nonzero exit code
CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScalersManager.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/Singletons/EXFontScalersManager.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScalersManager.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScalersManager.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/Singletons/EXFontScalersManager.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScalersManager.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScaler.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontScaler.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScaler.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScaler.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontScaler.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontScaler.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontManager.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontManager.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontManager.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontManager.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontManager.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontManager.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake-dummy.o /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXKeepAwake/EXKeepAwake-dummy.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXKeepAwake' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/EXKeepAwake-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXKeepAwake/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXKeepAwake -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXKeepAwake -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXKeepAwake -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXKeepAwake/EXKeepAwake-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake-dummy.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake-dummy.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXKeepAwake/EXKeepAwake-dummy.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake-dummy.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoaderProcessor.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontLoaderProcessor.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoaderProcessor.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoaderProcessor.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontLoaderProcessor.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoaderProcessor.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoader.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontLoader.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoader.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoader.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-font/ios/EXFont/EXFontLoader.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFontLoader.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont-dummy.o /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-dummy.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/EXFont-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXFont -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont-dummy.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont-dummy.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXFont/EXFont-dummy.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont-dummy.o

Libtool /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXKeepAwake/libEXKeepAwake.a normal (in target 'EXKeepAwake' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export IPHONEOS_DEPLOYMENT_TARGET\=12.0
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool -static -arch_only x86_64 -D -syslibroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -L/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXKeepAwake -filelist /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake.LinkFileList -dependency_info /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXKeepAwake.build/Objects-normal/x86_64/EXKeepAwake_libtool_dependency_info.dat -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXKeepAwake/libEXKeepAwake.a

Libtool /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXErrorRecovery/libEXErrorRecovery.a normal (in target 'EXErrorRecovery' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export IPHONEOS_DEPLOYMENT_TARGET\=12.0
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool -static -arch_only x86_64 -D -syslibroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -L/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXErrorRecovery -filelist /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecovery.LinkFileList -dependency_info /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXErrorRecovery.build/Objects-normal/x86_64/EXErrorRecovery_libtool_dependency_info.dat -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXErrorRecovery/libEXErrorRecovery.a

CodeSign /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/EXConstants.bundle (in target 'EXConstants-EXConstants' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export CODESIGN_ALLOCATE\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/codesign_allocate
    
    Signing Identity:     "-"
    
    /usr/bin/codesign --force --sign - --timestamp\=none --generate-entitlement-der /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/EXConstants.bundle
/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/EXConstants.bundle: replacing existing signature

CodeSign /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/EXUpdates.bundle (in target 'EXUpdates-EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export CODESIGN_ALLOCATE\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/codesign_allocate
    
    Signing Identity:     "-"
    
    /usr/bin/codesign --force --sign - --timestamp\=none --generate-entitlement-der /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/EXUpdates.bundle
/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/EXUpdates.bundle: replacing existing signature

PhaseScriptExecution [CP-User]\ Generate\ app.config\ for\ prebuilt\ Constants.manifest /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Script-5EA29C51D9D7C41F8548CAAF0EA4AA7C.sh (in target 'EXConstants' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export ACTION\=build
    export AD_HOC_CODE_SIGNING_ALLOWED\=YES
    export ALLOW_TARGET_PLATFORM_SPECIALIZATION\=NO
    export ALTERNATE_GROUP\=staff
    export ALTERNATE_MODE\=u+w,go-w,a+rX
    export ALTERNATE_OWNER\=carolaineviana
    export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=NO
    export ALWAYS_SEARCH_USER_PATHS\=NO
    export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
    export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
    export APPLE_INTERNAL_DIR\=/AppleInternal
    export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
    export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
    export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
    export APPLICATION_EXTENSION_API_ONLY\=NO
    export APPLY_RULES_IN_COPY_FILES\=NO
    export APPLY_RULES_IN_COPY_HEADERS\=NO
    export ARCHS\=x86_64
    export ARCHS_STANDARD\=arm64\ x86_64
    export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
    export ARCHS_STANDARD_32_BIT\=i386
    export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
    export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64
    export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
    export ASSETCATALOG_FILTER_FOR_DEVICE_MODEL\=iPhone13,3
    export ASSETCATALOG_FILTER_FOR_DEVICE_OS_VERSION\=15.0
    export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ driverkit\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator
    export BITCODE_GENERATION_MODE\=marker
    export BUILD_ACTIVE_RESOURCES_ONLY\=YES
    export BUILD_COMPONENTS\=headers\ build
    export BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
    export BUILD_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_STYLE\=
    export BUILD_VARIANTS\=normal
    export BUILT_PRODUCTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants
    export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
    export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
    export BUNDLE_FORMAT\=shallow
    export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
    export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
    export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
    export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
    export CACHE_ROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CCHROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CHMOD\=/bin/chmod
    export CHOWN\=/usr/sbin/chown
    export CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED\=YES
    export CLANG_ANALYZER_NONNULL\=YES
    export CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION\=YES_AGGRESSIVE
    export CLANG_CXX_LANGUAGE_STANDARD\=gnu++14
    export CLANG_CXX_LIBRARY\=libc++
    export CLANG_ENABLE_MODULES\=YES
    export CLANG_ENABLE_MODULE_DEBUGGING\=NO
    export CLANG_ENABLE_OBJC_ARC\=YES
    export CLANG_ENABLE_OBJC_WEAK\=NO
    export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
    export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
    export CLANG_WARN_BOOL_CONVERSION\=YES
    export CLANG_WARN_COMMA\=YES
    export CLANG_WARN_CONSTANT_CONVERSION\=YES
    export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
    export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
    export CLANG_WARN_DOCUMENTATION_COMMENTS\=YES
    export CLANG_WARN_EMPTY_BODY\=YES
    export CLANG_WARN_ENUM_CONVERSION\=YES
    export CLANG_WARN_INFINITE_RECURSION\=YES
    export CLANG_WARN_INT_CONVERSION\=YES
    export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
    export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
    export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
    export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
    export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=NO
    export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
    export CLANG_WARN_STRICT_PROTOTYPES\=YES
    export CLANG_WARN_SUSPICIOUS_MOVE\=YES
    export CLANG_WARN_UNGUARDED_AVAILABILITY\=YES_AGGRESSIVE
    export CLANG_WARN_UNREACHABLE_CODE\=YES
    export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
    export CLASS_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/JavaClasses
    export CLEAN_PRECOMPS\=YES
    export CLONE_HEADERS\=NO
    export CODESIGNING_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/libEXConstants.a
    export CODE_SIGNING_ALLOWED\=NO
    export CODE_SIGNING_REQUIRED\=YES
    export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
    export CODE_SIGN_IDENTITY\=-
    export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
    export COLOR_DIAGNOSTICS\=NO
    export COMBINE_HIDPI_IMAGES\=NO
    export COMPILER_INDEX_STORE_ENABLE\=Default
    export COMPOSITE_SDK_DIRS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/CompositeSDKs
    export COMPRESS_PNG_FILES\=YES
    export CONFIGURATION\=Debug
    export CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants
    export CONFIGURATION_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator
    export COPYING_PRESERVES_HFS_DATA\=NO
    export COPY_HEADERS_RUN_UNIFDEF\=NO
    export COPY_PHASE_STRIP\=NO
    export COPY_RESOURCES_FROM_STATIC_FRAMEWORKS\=YES
    export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
    export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
    export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS15.0.sdk
    export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos15.0
    export CP\=/bin/cp
    export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
    export CURRENT_ARCH\=undefined_arch
    export CURRENT_VARIANT\=normal
    export DEAD_CODE_STRIPPING\=YES
    export DEBUGGING_SYMBOLS\=YES
    export DEBUG_INFORMATION_FORMAT\=dwarf
    export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
    export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export DEFINES_MODULE\=NO
    export DEPLOYMENT_LOCATION\=NO
    export DEPLOYMENT_POSTPROCESSING\=NO
    export DEPLOYMENT_TARGET_CLANG_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_CLANG_FLAG_NAME\=mios-simulator-version-min
    export DEPLOYMENT_TARGET_CLANG_FLAG_PREFIX\=-mios-simulator-version-min\=
    export DEPLOYMENT_TARGET_LD_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_LD_FLAG_NAME\=ios_simulator_version_min
    export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=9.0\ 9.1\ 9.2\ 9.3\ 10.0\ 10.1\ 10.2\ 10.3\ 11.0\ 11.1\ 11.2\ 11.3\ 11.4\ 12.0\ 12.1\ 12.2\ 12.3\ 12.4\ 13.0\ 13.1\ 13.2\ 13.3\ 13.4\ 13.5\ 13.6\ 14.0\ 14.1\ 14.2\ 14.3\ 14.4\ 14.5\ 14.6\ 14.7\ 15.0
    export DERIVED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/DerivedSources
    export DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/DerivedSources
    export DERIVED_SOURCES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/DerivedSources
    export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
    export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
    export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
    export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export DEVELOPMENT_LANGUAGE\=en
    export DONT_GENERATE_INFOPLIST_FILE\=NO
    export DO_HEADER_SCANNING_IN_JAM\=NO
    export DSTROOT\=/tmp/Pods.dst
    export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export DWARF_DSYM_FILE_NAME\=libEXConstants.a.dSYM
    export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
    export DWARF_DSYM_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants
    export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
    export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
    export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
    export ENABLE_APP_SANDBOX\=NO
    export ENABLE_BITCODE\=NO
    export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
    export ENABLE_HARDENED_RUNTIME\=NO
    export ENABLE_HEADER_DEPENDENCIES\=YES
    export ENABLE_ON_DEMAND_RESOURCES\=NO
    export ENABLE_PREVIEWS\=NO
    export ENABLE_STRICT_OBJC_MSGSEND\=YES
    export ENABLE_TESTABILITY\=YES
    export ENABLE_TESTING_SEARCH_PATHS\=NO
    export ENTITLEMENTS_DESTINATION\=__entitlements
    export ENTITLEMENTS_REQUIRED\=YES
    export EXCLUDED_ARCHS\=arm64\ 
    export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
    export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
    export EXECUTABLE_EXTENSION\=a
    export EXECUTABLE_NAME\=libEXConstants.a
    export EXECUTABLE_PATH\=libEXConstants.a
    export EXECUTABLE_PREFIX\=lib
    export EXECUTABLE_SUFFIX\=.a
    export FILE_LIST\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects/LinkFileList
    export FIXED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/FixedFiles
    export FRAMEWORK_FLAG_PREFIX\=-framework
    export FRAMEWORK_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants\ 
    export FRAMEWORK_VERSION\=A
    export FULL_PRODUCT_NAME\=libEXConstants.a
    export GCC3_VERSION\=3.3
    export GCC_C_LANGUAGE_STANDARD\=gnu11
    export GCC_DYNAMIC_NO_PIC\=NO
    export GCC_NO_COMMON_BLOCKS\=YES
    export GCC_OBJC_LEGACY_DISPATCH\=YES
    export GCC_OPTIMIZATION_LEVEL\=0
    export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
    export GCC_PREFIX_HEADER\=Target\ Support\ Files/EXConstants/EXConstants-prefix.pch
    export GCC_PREPROCESSOR_DEFINITIONS\=POD_CONFIGURATION_DEBUG\=1\ DEBUG\=1\ \ COCOAPODS\=1
    export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
    export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
    export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
    export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
    export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
    export GCC_WARN_UNDECLARED_SELECTOR\=YES
    export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
    export GCC_WARN_UNUSED_FUNCTION\=YES
    export GCC_WARN_UNUSED_VARIABLE\=YES
    export GENERATED_MODULEMAP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
    export GENERATE_INFOPLIST_FILE\=NO
    export GENERATE_MASTER_OBJECT_FILE\=NO
    export GENERATE_PKGINFO_FILE\=NO
    export GENERATE_PROFILING_CODE\=NO
    export GENERATE_TEXT_BASED_STUBS\=NO
    export GID\=20
    export GROUP\=staff
    export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
    export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
    export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
    export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
    export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
    export HEADERMAP_USES_VFS\=NO
    export HEADER_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/include\ \ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXConstants\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXConstants\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog\"
    export HIDE_BITCODE_SYMBOLS\=YES
    export HOME\=/Users/carolaineviana
    export ICONV\=/usr/bin/iconv
    export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
    export INFOPLIST_OUTPUT_FORMAT\=binary
    export INFOPLIST_PREPROCESS\=NO
    export INLINE_PRIVATE_FRAMEWORKS\=NO
    export INSTALLHDRS_COPY_PHASE\=NO
    export INSTALLHDRS_SCRIPT_PHASE\=NO
    export INSTALL_DIR\=/tmp/Pods.dst/usr/local/lib
    export INSTALL_GROUP\=staff
    export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
    export INSTALL_OWNER\=carolaineviana
    export INSTALL_PATH\=/usr/local/lib
    export INSTALL_ROOT\=/tmp/Pods.dst
    export IPHONEOS_DEPLOYMENT_TARGET\=12.0
    export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
    export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
    export JAVA_ARCHIVE_CLASSES\=YES
    export JAVA_ARCHIVE_TYPE\=JAR
    export JAVA_COMPILER\=/usr/bin/javac
    export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
    export JAVA_JAR_FLAGS\=cv
    export JAVA_SOURCE_SUBDIR\=.
    export JAVA_USE_DEPENDENCIES\=YES
    export JAVA_ZIP_FLAGS\=-urg
    export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
    export KEEP_PRIVATE_EXTERNS\=NO
    export LD_DEPENDENCY_INFO_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/undefined_arch/EXConstants_dependency_info.dat
    export LD_GENERATE_MAP_FILE\=NO
    export LD_MAP_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/EXConstants-LinkMap-normal-undefined_arch.txt
    export LD_NO_PIE\=NO
    export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
    export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
    export LEX\=lex
    export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
    export LIBRARY_FLAG_NOSPACE\=YES
    export LIBRARY_FLAG_PREFIX\=-l
    export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
    export LIBRARY_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants\ 
    export LINKER_DISPLAYS_MANGLED_NAMES\=NO
    export LINK_FILE_LIST_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/x86_64/EXConstants.LinkFileList
    export LINK_WITH_STANDARD_LIBRARIES\=YES
    export LLVM_TARGET_TRIPLE_OS_VERSION\=ios12.0
    export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
    export LLVM_TARGET_TRIPLE_VENDOR\=apple
    export LOCALIZATION_EXPORT_SUPPORTED\=YES
    export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
    export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
    export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
    export LOCAL_APPS_DIR\=/Applications
    export LOCAL_DEVELOPER_DIR\=/Library/Developer
    export LOCAL_LIBRARY_DIR\=/Library
    export LOCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LOCSYMROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export MACH_O_TYPE\=staticlib
    export MAC_OS_X_PRODUCT_BUILD_VERSION\=20G71
    export MAC_OS_X_VERSION_ACTUAL\=110500
    export MAC_OS_X_VERSION_MAJOR\=110000
    export MAC_OS_X_VERSION_MINOR\=110500
    export METAL_LIBRARY_FILE_BASE\=default
    export METAL_LIBRARY_OUTPUT_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/
    export MODULE_CACHE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
    export MTL_ENABLE_DEBUG_INFO\=INCLUDE_SOURCE
    export MTL_FAST_MATH\=YES
    export NATIVE_ARCH\=x86_64
    export NATIVE_ARCH_32_BIT\=i386
    export NATIVE_ARCH_64_BIT\=x86_64
    export NATIVE_ARCH_ACTUAL\=x86_64
    export NO_COMMON\=YES
    export OBJC_ABI_VERSION\=2
    export OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects
    export OBJECT_FILE_DIR_normal\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal
    export OBJROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export ONLY_ACTIVE_ARCH\=YES
    export OS\=MACOS
    export OSAC\=/usr/bin/osacompile
    export OTHER_CFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export OTHER_CPLUSPLUSFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export PACKAGE_TYPE\=com.apple.package-type.static-library
    export PASCAL_STRINGS\=YES
    export PATH\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/T/yarn--1639449488047-0.606493938614225:/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/.bin:/Users/carolaineviana/.config/yarn/link/node_modules/.bin:/usr/local/Cellar/node/16.7.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/bin/node_modules/npm/bin/node-gyp-bin:/Users/carolaineviana/.amplify/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
    export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
    export PER_ARCH_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/undefined_arch
    export PER_VARIANT_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal
    export PKGINFO_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/PkgInfo
    export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
    export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
    export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
    export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
    export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
    export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
    export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
    export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
    export PLATFORM_FAMILY_NAME\=iOS
    export PLATFORM_NAME\=iphonesimulator
    export PLATFORM_PREFERRED_ARCH\=x86_64
    export PLATFORM_PRODUCT_BUILD_VERSION\=19A339
    export PLIST_FILE_OUTPUT_FORMAT\=binary
    export PODS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export PODS_CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator
    export PODS_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PODS_TARGET_SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-constants/ios
    export PODS_XCFRAMEWORKS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates
    export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
    export PRECOMP_DESTINATION_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/PrefixHeaders
    export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
    export PRODUCT_BUNDLE_IDENTIFIER\=org.cocoapods.EXConstants
    export PRODUCT_MODULE_NAME\=EXConstants
    export PRODUCT_NAME\=EXConstants
    export PRODUCT_SETTINGS_PATH\=
    export PRODUCT_TYPE\=com.apple.product-type.library.static
    export PROFILING_CODE\=NO
    export PROJECT\=Pods
    export PROJECT_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/DerivedSources
    export PROJECT_DIR\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PROJECT_FILE_PATH\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Pods.xcodeproj
    export PROJECT_NAME\=Pods
    export PROJECT_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build
    export PROJECT_TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
    export REMOVE_CVS_FROM_RESOURCES\=YES
    export REMOVE_GIT_FROM_RESOURCES\=YES
    export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
    export REMOVE_HG_FROM_RESOURCES\=YES
    export REMOVE_SVN_FROM_RESOURCES\=YES
    export REZ_COLLECTOR_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/ResourceManagerResources
    export REZ_EXECUTABLE\=YES
    export REZ_OBJECTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/ResourceManagerResources/Objects
    export REZ_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants\ 
    export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
    export SCRIPT_INPUT_FILE_COUNT\=0
    export SCRIPT_INPUT_FILE_LIST_COUNT\=0
    export SCRIPT_OUTPUT_FILE_COUNT\=0
    export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator15_0\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_NAME\=iphonesimulator15.0
    export SDK_NAMES\=iphonesimulator15.0
    export SDK_PRODUCT_BUILD_VERSION\=19A339
    export SDK_VERSION\=15.0
    export SDK_VERSION_ACTUAL\=150000
    export SDK_VERSION_MAJOR\=150000
    export SDK_VERSION_MINOR\=150000
    export SED\=/usr/bin/sed
    export SEPARATE_STRIP\=NO
    export SEPARATE_SYMBOL_EDIT\=NO
    export SET_DIR_MODE_OWNER_GROUP\=YES
    export SET_FILE_MODE_OWNER_GROUP\=NO
    export SHALLOW_BUNDLE\=NO
    export SHARED_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/DerivedSources
    export SHARED_PRECOMPS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/PrecompiledHeaders
    export SKIP_INSTALL\=YES
    export SOURCE_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export STRINGSDATA_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/undefined_arch
    export STRINGSDATA_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build
    export STRINGS_FILE_INFOPLIST_RENAME\=YES
    export STRINGS_FILE_OUTPUT_ENCODING\=binary
    export STRIP_BITCODE_FROM_COPIED_FILES\=NO
    export STRIP_INSTALLED_PRODUCT\=NO
    export STRIP_STYLE\=debugging
    export STRIP_SWIFT_SYMBOLS\=YES
    export SUPPORTED_DEVICE_FAMILIES\=1,2
    export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
    export SUPPORTS_TEXT_BASED_API\=NO
    export SWIFT_ACTIVE_COMPILATION_CONDITIONS\=DEBUG\ 
    export SWIFT_EMIT_LOC_STRINGS\=NO
    export SWIFT_INCLUDE_PATHS\=\ \"/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore\"
    export SWIFT_OPTIMIZATION_LEVEL\=-Onone
    export SWIFT_PLATFORM_TARGET_PREFIX\=ios
    export SWIFT_RESPONSE_FILE_PATH_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/x86_64/EXConstants.SwiftFileList
    export SWIFT_VERSION\=5.0
    export SYMROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
    export SYSTEM_APPS_DIR\=/Applications
    export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
    export SYSTEM_DEMOS_DIR\=/Applications/Extras
    export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
    export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
    export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
    export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
    export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
    export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
    export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
    export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
    export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
    export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
    export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
    export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export SYSTEM_LIBRARY_DIR\=/System/Library
    export TAPI_VERIFY_MODE\=ErrorsOnly
    export TARGETED_DEVICE_FAMILY\=1,2
    export TARGETNAME\=EXConstants
    export TARGET_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants
    export TARGET_DEVICE_IDENTIFIER\=24858D51-ABE5-4467-BF73-4791FBCD9CF3
    export TARGET_DEVICE_MODEL\=iPhone13,3
    export TARGET_DEVICE_OS_VERSION\=15.0
    export TARGET_DEVICE_PLATFORM_NAME\=iphonesimulator
    export TARGET_NAME\=EXConstants
    export TARGET_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build
    export TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build
    export TEMP_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build
    export TEMP_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build
    export TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk/Developer/Library/Frameworks
    export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
    export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
    export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
    export UID\=501
    export UNSTRIPPED_PRODUCT\=NO
    export USER\=carolaineviana
    export USER_APPS_DIR\=/Users/carolaineviana/Applications
    export USER_LIBRARY_DIR\=/Users/carolaineviana/Library
    export USE_DYNAMIC_NO_PIC\=YES
    export USE_HEADERMAP\=YES
    export USE_HEADER_SYMLINKS\=NO
    export USE_LLVM_TARGET_TRIPLES\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_CLANG\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_LD\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_TAPI\=YES
    export USE_RECURSIVE_SCRIPT_INPUTS_IN_SCRIPT_PHASES\=YES
    export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
    export VALIDATE_PRODUCT\=NO
    export VALIDATE_WORKSPACE\=YES_ERROR
    export VALID_ARCHS\=arm64\ arm64e\ i386\ x86_64
    export VERBOSE_PBXCP\=NO
    export VERSION_INFO_BUILDER\=carolaineviana
    export VERSION_INFO_FILE\=EXConstants_vers.c
    export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:EXConstants\ \ PROJECT:Pods-\"
    export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
    export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
    export XCODE_PRODUCT_BUILD_VERSION\=13A1030d
    export XCODE_VERSION_ACTUAL\=1310
    export XCODE_VERSION_MAJOR\=1300
    export XCODE_VERSION_MINOR\=1310
    export XPCSERVICES_FOLDER_PATH\=/XPCServices
    export YACC\=yacc
    export arch\=undefined_arch
    export variant\=normal
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Script-5EA29C51D9D7C41F8548CAAF0EA4AA7C.sh

PhaseScriptExecution [CP-User]\ Generate\ app.manifest\ for\ expo-updates /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Script-E4FCA6E1F7622B034E084A2F8D7AC5D2.sh (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export ACTION\=build
    export AD_HOC_CODE_SIGNING_ALLOWED\=YES
    export ALLOW_TARGET_PLATFORM_SPECIALIZATION\=NO
    export ALTERNATE_GROUP\=staff
    export ALTERNATE_MODE\=u+w,go-w,a+rX
    export ALTERNATE_OWNER\=carolaineviana
    export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=NO
    export ALWAYS_SEARCH_USER_PATHS\=NO
    export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
    export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
    export APPLE_INTERNAL_DIR\=/AppleInternal
    export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
    export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
    export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
    export APPLICATION_EXTENSION_API_ONLY\=NO
    export APPLY_RULES_IN_COPY_FILES\=NO
    export APPLY_RULES_IN_COPY_HEADERS\=NO
    export ARCHS\=x86_64
    export ARCHS_STANDARD\=arm64\ x86_64
    export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
    export ARCHS_STANDARD_32_BIT\=i386
    export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
    export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64
    export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
    export ASSETCATALOG_FILTER_FOR_DEVICE_MODEL\=iPhone13,3
    export ASSETCATALOG_FILTER_FOR_DEVICE_OS_VERSION\=15.0
    export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ driverkit\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator
    export BITCODE_GENERATION_MODE\=marker
    export BUILD_ACTIVE_RESOURCES_ONLY\=YES
    export BUILD_COMPONENTS\=headers\ build
    export BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
    export BUILD_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export BUILD_STYLE\=
    export BUILD_VARIANTS\=normal
    export BUILT_PRODUCTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates
    export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
    export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
    export BUNDLE_FORMAT\=shallow
    export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
    export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
    export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
    export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
    export CACHE_ROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CCHROOT\=/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/C/com.apple.DeveloperTools/13.1-13A1030d/Xcode
    export CHMOD\=/bin/chmod
    export CHOWN\=/usr/sbin/chown
    export CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED\=YES
    export CLANG_ANALYZER_NONNULL\=YES
    export CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION\=YES_AGGRESSIVE
    export CLANG_CXX_LANGUAGE_STANDARD\=gnu++14
    export CLANG_CXX_LIBRARY\=libc++
    export CLANG_ENABLE_MODULES\=YES
    export CLANG_ENABLE_MODULE_DEBUGGING\=NO
    export CLANG_ENABLE_OBJC_ARC\=YES
    export CLANG_ENABLE_OBJC_WEAK\=NO
    export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
    export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
    export CLANG_WARN_BOOL_CONVERSION\=YES
    export CLANG_WARN_COMMA\=YES
    export CLANG_WARN_CONSTANT_CONVERSION\=YES
    export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
    export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
    export CLANG_WARN_DOCUMENTATION_COMMENTS\=YES
    export CLANG_WARN_EMPTY_BODY\=YES
    export CLANG_WARN_ENUM_CONVERSION\=YES
    export CLANG_WARN_INFINITE_RECURSION\=YES
    export CLANG_WARN_INT_CONVERSION\=YES
    export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
    export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
    export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
    export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
    export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=NO
    export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
    export CLANG_WARN_STRICT_PROTOTYPES\=YES
    export CLANG_WARN_SUSPICIOUS_MOVE\=YES
    export CLANG_WARN_UNGUARDED_AVAILABILITY\=YES_AGGRESSIVE
    export CLANG_WARN_UNREACHABLE_CODE\=YES
    export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
    export CLASS_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/JavaClasses
    export CLEAN_PRECOMPS\=YES
    export CLONE_HEADERS\=NO
    export CODESIGNING_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/libEXUpdates.a
    export CODE_SIGNING_ALLOWED\=NO
    export CODE_SIGNING_REQUIRED\=YES
    export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
    export CODE_SIGN_IDENTITY\=-
    export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
    export COLOR_DIAGNOSTICS\=NO
    export COMBINE_HIDPI_IMAGES\=NO
    export COMPILER_INDEX_STORE_ENABLE\=Default
    export COMPOSITE_SDK_DIRS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/CompositeSDKs
    export COMPRESS_PNG_FILES\=YES
    export CONFIGURATION\=Debug
    export CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates
    export CONFIGURATION_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator
    export COPYING_PRESERVES_HFS_DATA\=NO
    export COPY_HEADERS_RUN_UNIFDEF\=NO
    export COPY_PHASE_STRIP\=NO
    export COPY_RESOURCES_FROM_STATIC_FRAMEWORKS\=YES
    export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
    export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
    export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS15.0.sdk
    export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos15.0
    export CP\=/bin/cp
    export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
    export CURRENT_ARCH\=undefined_arch
    export CURRENT_VARIANT\=normal
    export DEAD_CODE_STRIPPING\=YES
    export DEBUGGING_SYMBOLS\=YES
    export DEBUG_INFORMATION_FORMAT\=dwarf
    export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
    export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export DEFINES_MODULE\=NO
    export DEPLOYMENT_LOCATION\=NO
    export DEPLOYMENT_POSTPROCESSING\=NO
    export DEPLOYMENT_TARGET_CLANG_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_CLANG_FLAG_NAME\=mios-simulator-version-min
    export DEPLOYMENT_TARGET_CLANG_FLAG_PREFIX\=-mios-simulator-version-min\=
    export DEPLOYMENT_TARGET_LD_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_LD_FLAG_NAME\=ios_simulator_version_min
    export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=9.0\ 9.1\ 9.2\ 9.3\ 10.0\ 10.1\ 10.2\ 10.3\ 11.0\ 11.1\ 11.2\ 11.3\ 11.4\ 12.0\ 12.1\ 12.2\ 12.3\ 12.4\ 13.0\ 13.1\ 13.2\ 13.3\ 13.4\ 13.5\ 13.6\ 14.0\ 14.1\ 14.2\ 14.3\ 14.4\ 14.5\ 14.6\ 14.7\ 15.0
    export DERIVED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources
    export DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources
    export DERIVED_SOURCES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources
    export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
    export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
    export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
    export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export DEVELOPMENT_LANGUAGE\=en
    export DONT_GENERATE_INFOPLIST_FILE\=NO
    export DO_HEADER_SCANNING_IN_JAM\=NO
    export DSTROOT\=/tmp/Pods.dst
    export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export DWARF_DSYM_FILE_NAME\=libEXUpdates.a.dSYM
    export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
    export DWARF_DSYM_FOLDER_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates
    export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
    export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
    export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
    export ENABLE_APP_SANDBOX\=NO
    export ENABLE_BITCODE\=NO
    export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
    export ENABLE_HARDENED_RUNTIME\=NO
    export ENABLE_HEADER_DEPENDENCIES\=YES
    export ENABLE_ON_DEMAND_RESOURCES\=NO
    export ENABLE_PREVIEWS\=NO
    export ENABLE_STRICT_OBJC_MSGSEND\=YES
    export ENABLE_TESTABILITY\=YES
    export ENABLE_TESTING_SEARCH_PATHS\=NO
    export ENTITLEMENTS_DESTINATION\=__entitlements
    export ENTITLEMENTS_REQUIRED\=YES
    export EXCLUDED_ARCHS\=arm64\ 
    export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
    export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
    export EXECUTABLE_EXTENSION\=a
    export EXECUTABLE_NAME\=libEXUpdates.a
    export EXECUTABLE_PATH\=libEXUpdates.a
    export EXECUTABLE_PREFIX\=lib
    export EXECUTABLE_SUFFIX\=.a
    export FILE_LIST\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects/LinkFileList
    export FIXED_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/FixedFiles
    export FRAMEWORK_FLAG_PREFIX\=-framework
    export FRAMEWORK_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates\ \ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-structured-headers/ios\"\ \"/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders\"
    export FRAMEWORK_VERSION\=A
    export FULL_PRODUCT_NAME\=libEXUpdates.a
    export GCC3_VERSION\=3.3
    export GCC_C_LANGUAGE_STANDARD\=gnu11
    export GCC_DYNAMIC_NO_PIC\=NO
    export GCC_NO_COMMON_BLOCKS\=YES
    export GCC_OBJC_LEGACY_DISPATCH\=YES
    export GCC_OPTIMIZATION_LEVEL\=0
    export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
    export GCC_PREFIX_HEADER\=Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch
    export GCC_PREPROCESSOR_DEFINITIONS\=POD_CONFIGURATION_DEBUG\=1\ DEBUG\=1\ \ COCOAPODS\=1
    export GCC_TREAT_IMPLICIT_FUNCTION_DECLARATIONS_AS_ERRORS\=YES
    export GCC_TREAT_INCOMPATIBLE_POINTER_TYPE_WARNINGS_AS_ERRORS\=YES
    export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
    export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
    export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
    export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
    export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
    export GCC_WARN_UNDECLARED_SELECTOR\=YES
    export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
    export GCC_WARN_UNUSED_FUNCTION\=YES
    export GCC_WARN_UNUSED_VARIABLE\=YES
    export GENERATED_MODULEMAP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
    export GENERATE_INFOPLIST_FILE\=NO
    export GENERATE_MASTER_OBJECT_FILE\=NO
    export GENERATE_PKGINFO_FILE\=NO
    export GENERATE_PROFILING_CODE\=NO
    export GENERATE_TEXT_BASED_STUBS\=NO
    export GID\=20
    export GROUP\=staff
    export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
    export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
    export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
    export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
    export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
    export HEADERMAP_USES_VFS\=NO
    export HEADER_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include\ \ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga\"\ \"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog\"
    export HIDE_BITCODE_SYMBOLS\=YES
    export HOME\=/Users/carolaineviana
    export ICONV\=/usr/bin/iconv
    export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
    export INFOPLIST_OUTPUT_FORMAT\=binary
    export INFOPLIST_PREPROCESS\=NO
    export INLINE_PRIVATE_FRAMEWORKS\=NO
    export INSTALLHDRS_COPY_PHASE\=NO
    export INSTALLHDRS_SCRIPT_PHASE\=NO
    export INSTALL_DIR\=/tmp/Pods.dst/usr/local/lib
    export INSTALL_GROUP\=staff
    export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
    export INSTALL_OWNER\=carolaineviana
    export INSTALL_PATH\=/usr/local/lib
    export INSTALL_ROOT\=/tmp/Pods.dst
    export IPHONEOS_DEPLOYMENT_TARGET\=12.0
    export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
    export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
    export JAVA_ARCHIVE_CLASSES\=YES
    export JAVA_ARCHIVE_TYPE\=JAR
    export JAVA_COMPILER\=/usr/bin/javac
    export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
    export JAVA_JAR_FLAGS\=cv
    export JAVA_SOURCE_SUBDIR\=.
    export JAVA_USE_DEPENDENCIES\=YES
    export JAVA_ZIP_FLAGS\=-urg
    export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
    export KEEP_PRIVATE_EXTERNS\=NO
    export LD_DEPENDENCY_INFO_FILE\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/undefined_arch/EXUpdates_dependency_info.dat
    export LD_GENERATE_MAP_FILE\=NO
    export LD_MAP_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-LinkMap-normal-undefined_arch.txt
    export LD_NO_PIE\=NO
    export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
    export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
    export LEX\=lex
    export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
    export LIBRARY_FLAG_NOSPACE\=YES
    export LIBRARY_FLAG_PREFIX\=-l
    export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
    export LIBRARY_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates\ 
    export LINKER_DISPLAYS_MANGLED_NAMES\=NO
    export LINK_FILE_LIST_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdates.LinkFileList
    export LINK_WITH_STANDARD_LIBRARIES\=YES
    export LLVM_TARGET_TRIPLE_OS_VERSION\=ios12.0
    export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
    export LLVM_TARGET_TRIPLE_VENDOR\=apple
    export LOCALIZATION_EXPORT_SUPPORTED\=YES
    export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
    export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
    export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
    export LOCAL_APPS_DIR\=/Applications
    export LOCAL_DEVELOPER_DIR\=/Library/Developer
    export LOCAL_LIBRARY_DIR\=/Library
    export LOCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LOCSYMROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export MACH_O_TYPE\=staticlib
    export MAC_OS_X_PRODUCT_BUILD_VERSION\=20G71
    export MAC_OS_X_VERSION_ACTUAL\=110500
    export MAC_OS_X_VERSION_MAJOR\=110000
    export MAC_OS_X_VERSION_MINOR\=110500
    export METAL_LIBRARY_FILE_BASE\=default
    export METAL_LIBRARY_OUTPUT_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/
    export MODULE_CACHE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
    export MTL_ENABLE_DEBUG_INFO\=INCLUDE_SOURCE
    export MTL_FAST_MATH\=YES
    export NATIVE_ARCH\=x86_64
    export NATIVE_ARCH_32_BIT\=i386
    export NATIVE_ARCH_64_BIT\=x86_64
    export NATIVE_ARCH_ACTUAL\=x86_64
    export NO_COMMON\=YES
    export OBJC_ABI_VERSION\=2
    export OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects
    export OBJECT_FILE_DIR_normal\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal
    export OBJROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export ONLY_ACTIVE_ARCH\=YES
    export OS\=MACOS
    export OSAC\=/usr/bin/osacompile
    export OTHER_CFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export OTHER_CPLUSPLUSFLAGS\=\ -fmodule-map-file\=\"/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap\"\ -fmodule-map-file\=\"/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"
    export PACKAGE_TYPE\=com.apple.package-type.static-library
    export PASCAL_STRINGS\=YES
    export PATH\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/var/folders/rr/s2_5q0gd0bq5qxr48p_mrjxc0000gn/T/yarn--1639449488047-0.606493938614225:/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/.bin:/Users/carolaineviana/.config/yarn/link/node_modules/.bin:/usr/local/Cellar/node/16.7.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/Cellar/node/16.7.0/bin/node_modules/npm/bin/node-gyp-bin:/Users/carolaineviana/.amplify/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
    export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
    export PER_ARCH_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/undefined_arch
    export PER_VARIANT_OBJECT_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal
    export PKGINFO_FILE_PATH\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/PkgInfo
    export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
    export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
    export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
    export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
    export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
    export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
    export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
    export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
    export PLATFORM_FAMILY_NAME\=iOS
    export PLATFORM_NAME\=iphonesimulator
    export PLATFORM_PREFERRED_ARCH\=x86_64
    export PLATFORM_PRODUCT_BUILD_VERSION\=19A339
    export PLIST_FILE_OUTPUT_FORMAT\=binary
    export PODS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export PODS_CONFIGURATION_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator
    export PODS_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PODS_TARGET_SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/../../node_modules/expo-updates/ios
    export PODS_XCFRAMEWORKS_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates
    export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
    export PRECOMP_DESTINATION_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/PrefixHeaders
    export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
    export PRODUCT_BUNDLE_IDENTIFIER\=org.cocoapods.EXUpdates
    export PRODUCT_MODULE_NAME\=EXUpdates
    export PRODUCT_NAME\=EXUpdates
    export PRODUCT_SETTINGS_PATH\=
    export PRODUCT_TYPE\=com.apple.product-type.library.static
    export PROFILING_CODE\=NO
    export PROJECT\=Pods
    export PROJECT_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/DerivedSources
    export PROJECT_DIR\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export PROJECT_FILE_PATH\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Pods.xcodeproj
    export PROJECT_NAME\=Pods
    export PROJECT_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build
    export PROJECT_TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
    export REMOVE_CVS_FROM_RESOURCES\=YES
    export REMOVE_GIT_FROM_RESOURCES\=YES
    export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
    export REMOVE_HG_FROM_RESOURCES\=YES
    export REMOVE_SVN_FROM_RESOURCES\=YES
    export REZ_COLLECTOR_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/ResourceManagerResources
    export REZ_EXECUTABLE\=YES
    export REZ_OBJECTS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/ResourceManagerResources/Objects
    export REZ_SEARCH_PATHS\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates\ 
    export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
    export SCRIPT_INPUT_FILE_COUNT\=0
    export SCRIPT_INPUT_FILE_LIST_COUNT\=0
    export SCRIPT_OUTPUT_FILE_COUNT\=0
    export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_DIR_iphonesimulator15_0\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk
    export SDK_NAME\=iphonesimulator15.0
    export SDK_NAMES\=iphonesimulator15.0
    export SDK_PRODUCT_BUILD_VERSION\=19A339
    export SDK_VERSION\=15.0
    export SDK_VERSION_ACTUAL\=150000
    export SDK_VERSION_MAJOR\=150000
    export SDK_VERSION_MINOR\=150000
    export SED\=/usr/bin/sed
    export SEPARATE_STRIP\=NO
    export SEPARATE_SYMBOL_EDIT\=NO
    export SET_DIR_MODE_OWNER_GROUP\=YES
    export SET_FILE_MODE_OWNER_GROUP\=NO
    export SHALLOW_BUNDLE\=NO
    export SHARED_DERIVED_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/DerivedSources
    export SHARED_PRECOMPS_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/PrecompiledHeaders
    export SKIP_INSTALL\=YES
    export SOURCE_ROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export SRCROOT\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export STRINGSDATA_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/undefined_arch
    export STRINGSDATA_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build
    export STRINGS_FILE_INFOPLIST_RENAME\=YES
    export STRINGS_FILE_OUTPUT_ENCODING\=binary
    export STRIP_BITCODE_FROM_COPIED_FILES\=NO
    export STRIP_INSTALLED_PRODUCT\=NO
    export STRIP_STYLE\=debugging
    export STRIP_SWIFT_SYMBOLS\=YES
    export SUPPORTED_DEVICE_FAMILIES\=1,2
    export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
    export SUPPORTS_TEXT_BASED_API\=NO
    export SWIFT_ACTIVE_COMPILATION_CONDITIONS\=DEBUG\ 
    export SWIFT_EMIT_LOC_STRINGS\=NO
    export SWIFT_INCLUDE_PATHS\=\ \"/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore\"
    export SWIFT_OPTIMIZATION_LEVEL\=-Onone
    export SWIFT_PLATFORM_TARGET_PREFIX\=ios
    export SWIFT_RESPONSE_FILE_PATH_normal_x86_64\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdates.SwiftFileList
    export SWIFT_VERSION\=5.0
    export SYMROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products
    export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
    export SYSTEM_APPS_DIR\=/Applications
    export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
    export SYSTEM_DEMOS_DIR\=/Applications/Extras
    export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
    export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
    export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
    export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
    export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
    export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
    export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
    export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
    export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
    export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
    export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
    export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export SYSTEM_LIBRARY_DIR\=/System/Library
    export TAPI_VERIFY_MODE\=ErrorsOnly
    export TARGETED_DEVICE_FAMILY\=1,2
    export TARGETNAME\=EXUpdates
    export TARGET_BUILD_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates
    export TARGET_DEVICE_IDENTIFIER\=24858D51-ABE5-4467-BF73-4791FBCD9CF3
    export TARGET_DEVICE_MODEL\=iPhone13,3
    export TARGET_DEVICE_OS_VERSION\=15.0
    export TARGET_DEVICE_PLATFORM_NAME\=iphonesimulator
    export TARGET_NAME\=EXUpdates
    export TARGET_TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build
    export TEMP_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build
    export TEMP_FILES_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build
    export TEMP_FILE_DIR\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build
    export TEMP_ROOT\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex
    export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk/Developer/Library/Frameworks
    export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
    export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
    export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
    export UID\=501
    export UNSTRIPPED_PRODUCT\=NO
    export USER\=carolaineviana
    export USER_APPS_DIR\=/Users/carolaineviana/Applications
    export USER_LIBRARY_DIR\=/Users/carolaineviana/Library
    export USE_DYNAMIC_NO_PIC\=YES
    export USE_HEADERMAP\=YES
    export USE_HEADER_SYMLINKS\=NO
    export USE_LLVM_TARGET_TRIPLES\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_CLANG\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_LD\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_TAPI\=YES
    export USE_RECURSIVE_SCRIPT_INPUTS_IN_SCRIPT_PHASES\=YES
    export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
    export VALIDATE_PRODUCT\=NO
    export VALIDATE_WORKSPACE\=YES_ERROR
    export VALID_ARCHS\=arm64\ arm64e\ i386\ x86_64
    export VERBOSE_PBXCP\=NO
    export VERSION_INFO_BUILDER\=carolaineviana
    export VERSION_INFO_FILE\=EXUpdates_vers.c
    export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:EXUpdates\ \ PROJECT:Pods-\"
    export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
    export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
    export XCODE_PRODUCT_BUILD_VERSION\=13A1030d
    export XCODE_VERSION_ACTUAL\=1310
    export XCODE_VERSION_MAJOR\=1300
    export XCODE_VERSION_MINOR\=1310
    export XPCSERVICES_FOLDER_PATH\=/XPCServices
    export YACC\=yacc
    export arch\=undefined_arch
    export variant\=normal
    /bin/sh -c /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Script-E4FCA6E1F7622B034E084A2F8D7AC5D2.sh

Libtool /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/libEXFont.a normal (in target 'EXFont' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export IPHONEOS_DEPLOYMENT_TARGET\=12.0
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool -static -arch_only x86_64 -D -syslibroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -L/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont -filelist /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont.LinkFileList -dependency_info /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXFont.build/Objects-normal/x86_64/EXFont_libtool_dependency_info.dat -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXFont/libEXFont.a

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdates-dummy.o /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-dummy.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdates-dummy.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdates-dummy.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-dummy.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdates-dummy.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/x86_64/EXConstants.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-constants/ios/EXConstants/EXConstants.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXConstants' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/EXConstants-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/EXConstants-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/EXConstants-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/EXConstants-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXConstants -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXConstants -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXConstants -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXConstants/EXConstants-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/x86_64/EXConstants.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/x86_64/EXConstants.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-constants/ios/EXConstants/EXConstants.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXConstants.build/Objects-normal/x86_64/EXConstants.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesBareUpdate.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/Update/EXUpdatesBareUpdate.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesBareUpdate.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesBareUpdate.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/Update/EXUpdatesBareUpdate.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesBareUpdate.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesAsset.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/AppLoader/EXUpdatesAsset.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesAsset.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesAsset.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/AppLoader/EXUpdatesAsset.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesAsset.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUtils.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/EXUpdatesUtils.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUtils.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUtils.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/EXUpdatesUtils.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUtils.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUpdate.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/Update/EXUpdatesUpdate.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUpdate.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUpdate.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/Update/EXUpdatesUpdate.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesUpdate.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesService.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/EXUpdatesService.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesService.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesService.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/EXUpdatesService.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesService.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicyFactory.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/SelectionPolicy/EXUpdatesSelectionPolicyFactory.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicyFactory.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicyFactory.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/SelectionPolicy/EXUpdatesSelectionPolicyFactory.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicyFactory.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicy.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/SelectionPolicy/EXUpdatesSelectionPolicy.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicy.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicy.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/SelectionPolicy/EXUpdatesSelectionPolicy.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicy.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicies.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/SelectionPolicy/EXUpdatesSelectionPolicies.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicies.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicies.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/SelectionPolicy/EXUpdatesSelectionPolicies.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesSelectionPolicies.o

CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesRemoteAppLoader.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/AppLoader/EXUpdatesRemoteAppLoader.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'EXUpdates' from project 'Pods')
    cd /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios12.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu11 -fobjc-arc -fmodules -fmodules-cache-path\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Werror\=incompatible-pointer-types -Werror\=implicit-function-declaration -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wdocumentation -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DPOD_CONFIGURATION_DEBUG\=1 -DDEBUG\=1 -DCOCOAPODS\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator15.0.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -Wunguarded-availability -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Index/DataStore -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-generated-files.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-own-target-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-all-non-framework-target-headers.hmap -ivfsoverlay /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/all-product-headers.yaml -iquote /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/EXUpdates-project-headers.hmap -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates/include -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Private/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/DoubleConversion -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXJSONUtils -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXStructuredHeaders -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdates -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/ExpoModulesCore -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/RCT-Folly -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-Core -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-callinvoker -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-cxxreact -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsi -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsiexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-jsinspector -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-perflogger -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React-runtimeexecutor -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/Yoga -I/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/glog -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources-normal/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources/x86_64 -I/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/DerivedSources -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/EXUpdates -F/Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-structured-headers/ios -F/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/EXStructuredHeaders -fmodule-map-file\=/Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Products/Debug-iphonesimulator/ExpoModulesCore/ExpoModulesCore.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXManifests/EXManifests.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/EXUpdatesInterface/EXUpdatesInterface.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/React/React-Core.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/jsi/React-jsi.modulemap -fmodule-map-file\=/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Headers/Public/yoga/Yoga.modulemap -include /Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Target\ Support\ Files/EXUpdates/EXUpdates-prefix.pch -MMD -MT dependencies -MF /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesRemoteAppLoader.d --serialize-diagnostics /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesRemoteAppLoader.dia -c /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/expo-updates/ios/EXUpdates/AppLoader/EXUpdatesRemoteAppLoader.m -o /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/EXUpdates.build/Objects-normal/x86_64/EXUpdatesRemoteAppLoader.o

/Users/carolaineviana/Documents/aplicativos/rentxApp/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 15.0.99. (in target 'boost-for-react-native' from project 'Pods')

```

# Error output

```log
** BUILD FAILED **


The following build commands failed:
	CompileC /Users/carolaineviana/Library/Developer/Xcode/DerivedData/rentxApp-bpzvnvcvizujlyfdrqwtzbymuqna/Build/Intermediates.noindex/WatermelonDB.build/Debug-iphonesimulator/WatermelonDB.build/Objects-normal/x86_64/DatabaseInstallation.o /Users/carolaineviana/Documents/aplicativos/rentxApp/node_modules/@nozbe/watermelondb/native/shared/DatabaseInstallation.cpp normal x86_64 c++ com.apple.compilers.llvm.clang.1_0.compiler (in target 'WatermelonDB' from project 'WatermelonDB')
	CompileSwiftSources normal x86_64 com.apple.xcode.tools.swift.compiler (in target 'lottie-react-native' from project 'Pods')
(2 failures)

```
