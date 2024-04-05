uniform sampler2D globeTexture;
varying vec2 vUv;
varying vec3 vNormal;

// vec3 atmosphere(vec3 direction, vec3 cameraPos, vec3 sunPos, float sunIntensity) {
//     const float innerRadius = 1.0; // Inner radius of the atmosphere
//     const float outerRadius = 1.025; // Outer radius of the atmosphere
//     const float rayleigh = 1.0; // Rayleigh scattering coefficient
//     const float mie = 0.5; // Mie scattering coefficient
//     const float scatterStrength = 0.1; // Overall scattering strength
//     const float g = 0.76; // Mie phase function

//     // Default values for camera and sun positions
//     if (length(cameraPos) == 0.0)
//         cameraPos = vec3(0.0, 0.0, -10.0); // Default camera position (outer space)
//     if (length(sunPos) == 0.0)
//         sunPos = vec3(10.0, 10.0, 10.0); // Default sun position (outer space)

//     float dist = length(cameraPos);
//     vec3 viewDir = normalize(cameraPos);
//     float cosTheta = dot(direction, viewDir);

//     // Calculate optical depth based on view direction
//     float r = length(cameraPos);
//     float r0 = innerRadius;
//     float r1 = outerRadius;
//     float opticalDepth = -1.0 / length(vec3(1.0 / r0, 1.0 / r0, 1.0 / r1));

//     // Calculate Rayleigh and Mie scattering contributions
//     vec3 betaR = rayleigh * vec3(5.8e-6, 13.5e-6, 33.1e-6); // Rayleigh scattering coefficient
//     vec3 betaM = mie * 0.005; // Mie scattering coefficient
//     vec3 totalBeta = (betaR + betaM) * scatterStrength;

//     vec3 scatter = exp(-totalBeta * opticalDepth) * (totalBeta / totalBeta);

//     // Calculate atmospheric color
//     vec3 sunDir = normalize(sunPos - cameraPos);
//     float cosSun = dot(viewDir, sunDir);
//     float phaseR = 3.0 / (16.0 * 3.141592653589793) * (1.0 + cosTheta * cosTheta);
//     float phaseM = 3.0 / (8.0 * 3.141592653589793) * ((1.0 - g * g) * (1.0 + cosTheta * cosTheta)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosTheta, 1.5));
//     vec3 rayleighColor = betaR * phaseR;
//     vec3 mieColor = betaM * phaseM;

//     // Calculate atmospheric glow
//     float cameraToSunDistance = length(sunPos - cameraPos);
//     float atmosphereRadius = outerRadius - innerRadius;
//     float lightAngle = dot(sunDir, viewDir);
//     float atmosphereWidth = 0.2;
//     float glowFactor = smoothstep(1.0 - atmosphereWidth, 1.0, lightAngle);

//     vec3 atmosphereGlow = sunIntensity * exp(-(cameraToSunDistance - atmosphereRadius) * 0.1) * glowFactor;

//     // Combine colors
//     vec3 atmosphereColor = rayleighColor + mieColor;
//     vec3 finalColor = atmosphereColor * scatter + atmosphereGlow;

//     return finalColor;
// }


void main() {
float intensity = 1.05 - dot(vNormal, vec3(0.0, 0.0, 1.0));
vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
  vec3 earthTexture = atmosphere + texture2D(globeTexture, vUv).xyz;
    gl_FragColor = vec4(earthTexture, 1.0);
}