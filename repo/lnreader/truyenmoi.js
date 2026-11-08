var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _a;
var Z0 = Object.create;
var Mu = Object.defineProperty, J0 = Object.defineProperties, Y0 = Object.getOwnPropertyDescriptor, _0 = Object.getOwnPropertyDescriptors, ur = Object.getOwnPropertyNames, Ft = Object.getOwnPropertySymbols, er = Object.getPrototypeOf, Ht = Object.prototype.hasOwnProperty, tr = Object.prototype.propertyIsEnumerable;
var Bt = function (u, e, t) { return e in u ? Mu(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t; }, J = function (u, e) {
    var e_2, _a;
    for (var t in e || (e = {}))
        Ht.call(e, t) && Bt(u, t, e[t]);
    if (Ft)
        try {
            for (var _b = __values(Ft(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                tr.call(e, t) && Bt(u, t, e[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return u;
}, hu = function (u, e) { return J0(u, _0(e)); };
var rr = function (u, e) { return function () { return (e || u((e = { exports: {} }).exports, e), e.exports); }; }, De = function (u, e) { for (var t in e)
    Mu(u, t, { get: e[t], enumerable: !0 }); }, Pt = function (u, e, t, r) {
    var e_3, _a;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (a) {
            !Ht.call(u, a) && a !== t && Mu(u, a, { get: function () { return e[a]; }, enumerable: !(r = Y0(e, a)) || r.enumerable });
        };
        try {
            for (var _b = __values(ur(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                _loop_1(a);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return u;
};
var bu = function (u, e, t) { return (t = u != null ? Z0(er(u)) : {}, Pt(e || !u || !u.__esModule ? Mu(t, "default", { value: u, enumerable: !0 }) : t, u)); }, ar = function (u) { return Pt(Mu({}, "__esModule", { value: !0 }), u); };
var fu = rr(function (an, p0) { p0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var ka = {};
De(ka, { default: function () { return qa; } });
module.exports = ar(ka);
var Yu = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (u) { return u.charCodeAt(0); }));
var _u = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (u) { return u.charCodeAt(0); }));
var Ue, ir = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Su = (Ue = String.fromCodePoint) !== null && Ue !== void 0 ? Ue : function (u) { var e = ""; return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e; };
function Oe(u) { var e; return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = ir.get(u)) !== null && e !== void 0 ? e : u; }
var O;
(function (u) { u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z"; })(O || (O = {}));
var nr = 32, su;
(function (u) { u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE"; })(su || (su = {}));
function Me(u) { return u >= O.ZERO && u <= O.NINE; }
function sr(u) { return u >= O.UPPER_A && u <= O.UPPER_F || u >= O.LOWER_A && u <= O.LOWER_F; }
function cr(u) { return u >= O.UPPER_A && u <= O.UPPER_Z || u >= O.LOWER_A && u <= O.LOWER_Z || Me(u); }
function or(u) { return u === O.EQUALS || cr(u); }
var U;
(function (u) { u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity"; })(U || (U = {}));
var $;
(function (u) { u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute"; })($ || ($ = {}));
var wu = (function () {
    function wu(e, t, r) {
        this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = U.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = $.Strict;
    }
    wu.prototype.startEntity = function (e) { this.decodeMode = e, this.state = U.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    wu.prototype.write = function (e, t) { switch (this.state) {
        case U.EntityStart: return e.charCodeAt(t) === O.NUM ? (this.state = U.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = U.NamedEntity, this.stateNamedEntity(e, t));
        case U.NumericStart: return this.stateNumericStart(e, t);
        case U.NumericDecimal: return this.stateNumericDecimal(e, t);
        case U.NumericHex: return this.stateNumericHex(e, t);
        case U.NamedEntity: return this.stateNamedEntity(e, t);
    } };
    wu.prototype.stateNumericStart = function (e, t) { return t >= e.length ? -1 : (e.charCodeAt(t) | nr) === O.LOWER_X ? (this.state = U.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = U.NumericDecimal, this.stateNumericDecimal(e, t)); };
    wu.prototype.addToNumericResult = function (e, t, r, a) { if (t !== r) {
        var i = r - t;
        this.result = this.result * Math.pow(a, i) + parseInt(e.substr(t, i), a), this.consumed += i;
    } };
    wu.prototype.stateNumericHex = function (e, t) { var r = t; for (; t < e.length;) {
        var a = e.charCodeAt(t);
        if (Me(a) || sr(a))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(e, r, t, 16), -1; };
    wu.prototype.stateNumericDecimal = function (e, t) { var r = t; for (; t < e.length;) {
        var a = e.charCodeAt(t);
        if (Me(a))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(e, r, t, 10), -1; };
    wu.prototype.emitNumericEntity = function (e, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === O.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === $.Strict)
        return 0; return this.emitCodePoint(Oe(this.result), this.consumed), this.errors && (e !== O.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    wu.prototype.stateNamedEntity = function (e, t) { var r = this.decodeTree, a = r[this.treeIndex], i = (a & su.VALUE_LENGTH) >> 14; for (; t < e.length; t++, this.excess++) {
        var n = e.charCodeAt(t);
        if (this.treeIndex = lr(r, a, this.treeIndex + Math.max(1, i), n), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === $.Attribute && (i === 0 || or(n)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], i = (a & su.VALUE_LENGTH) >> 14, i !== 0) {
            if (n === O.SEMI)
                return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
            this.decodeMode !== $.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    wu.prototype.emitNotTerminatedNamedEntity = function () { var e; var _a = this, t = _a.result, r = _a.decodeTree, a = (r[t] & su.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, a, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    wu.prototype.emitNamedEntityData = function (e, t, r) { var a = this.decodeTree; return this.emitCodePoint(t === 1 ? a[e] & ~su.VALUE_LENGTH : a[e + 1], r), t === 3 && this.emitCodePoint(a[e + 2], r), r; };
    wu.prototype.end = function () { var e; switch (this.state) {
        case U.NamedEntity: return this.result !== 0 && (this.decodeMode !== $.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case U.NumericDecimal: return this.emitNumericEntity(0, 2);
        case U.NumericHex: return this.emitNumericEntity(0, 3);
        case U.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case U.EntityStart: return 0;
    } };
    return wu;
}());
function Gt(u) { var e = "", t = new wu(u, function (r) { return e += Su(r); }); return function (a, i) { var n = 0, s = 0; for (; (s = a.indexOf("&", s)) >= 0;) {
    e += a.slice(n, s), t.startEntity(i);
    var o = t.write(a, s + 1);
    if (o < 0) {
        n = s + t.end();
        break;
    }
    n = s + o, s = o === 0 ? n + 1 : n;
} var c = e + a.slice(n); return e = "", c; }; }
function lr(u, e, t, r) { var a = (e & su.BRANCH_LENGTH) >> 7, i = e & su.JUMP_TABLE; if (a === 0)
    return i !== 0 && r === i ? t : -1; if (i) {
    var c = r - i;
    return c < 0 || c >= a ? -1 : u[t + c] - 1;
} var n = t, s = n + a - 1; for (; n <= s;) {
    var c = n + s >>> 1, o = u[c];
    if (o < r)
        n = c + 1;
    else if (o > r)
        s = c - 1;
    else
        return u[c + a];
} return -1; }
var Ba = Gt(Yu), Ha = Gt(_u);
var x;
(function (u) { u[u.Tab = 9] = "Tab", u[u.NewLine = 10] = "NewLine", u[u.FormFeed = 12] = "FormFeed", u[u.CarriageReturn = 13] = "CarriageReturn", u[u.Space = 32] = "Space", u[u.ExclamationMark = 33] = "ExclamationMark", u[u.Number = 35] = "Number", u[u.Amp = 38] = "Amp", u[u.SingleQuote = 39] = "SingleQuote", u[u.DoubleQuote = 34] = "DoubleQuote", u[u.Dash = 45] = "Dash", u[u.Slash = 47] = "Slash", u[u.Zero = 48] = "Zero", u[u.Nine = 57] = "Nine", u[u.Semi = 59] = "Semi", u[u.Lt = 60] = "Lt", u[u.Eq = 61] = "Eq", u[u.Gt = 62] = "Gt", u[u.Questionmark = 63] = "Questionmark", u[u.UpperA = 65] = "UpperA", u[u.LowerA = 97] = "LowerA", u[u.UpperF = 70] = "UpperF", u[u.LowerF = 102] = "LowerF", u[u.UpperZ = 90] = "UpperZ", u[u.LowerZ = 122] = "LowerZ", u[u.LowerX = 120] = "LowerX", u[u.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(x || (x = {}));
var f;
(function (u) { u[u.Text = 1] = "Text", u[u.BeforeTagName = 2] = "BeforeTagName", u[u.InTagName = 3] = "InTagName", u[u.InSelfClosingTag = 4] = "InSelfClosingTag", u[u.BeforeClosingTagName = 5] = "BeforeClosingTagName", u[u.InClosingTagName = 6] = "InClosingTagName", u[u.AfterClosingTagName = 7] = "AfterClosingTagName", u[u.BeforeAttributeName = 8] = "BeforeAttributeName", u[u.InAttributeName = 9] = "InAttributeName", u[u.AfterAttributeName = 10] = "AfterAttributeName", u[u.BeforeAttributeValue = 11] = "BeforeAttributeValue", u[u.InAttributeValueDq = 12] = "InAttributeValueDq", u[u.InAttributeValueSq = 13] = "InAttributeValueSq", u[u.InAttributeValueNq = 14] = "InAttributeValueNq", u[u.BeforeDeclaration = 15] = "BeforeDeclaration", u[u.InDeclaration = 16] = "InDeclaration", u[u.InProcessingInstruction = 17] = "InProcessingInstruction", u[u.BeforeComment = 18] = "BeforeComment", u[u.CDATASequence = 19] = "CDATASequence", u[u.InSpecialComment = 20] = "InSpecialComment", u[u.InCommentLike = 21] = "InCommentLike", u[u.BeforeSpecialS = 22] = "BeforeSpecialS", u[u.BeforeSpecialT = 23] = "BeforeSpecialT", u[u.SpecialStartSequence = 24] = "SpecialStartSequence", u[u.InSpecialTag = 25] = "InSpecialTag", u[u.InEntity = 26] = "InEntity"; })(f || (f = {}));
function tu(u) { return u === x.Space || u === x.NewLine || u === x.Tab || u === x.FormFeed || u === x.CarriageReturn; }
function ue(u) { return u === x.Slash || u === x.Gt || tu(u); }
function fr(u) { return u >= x.LowerA && u <= x.LowerZ || u >= x.UpperA && u <= x.UpperZ; }
var K;
(function (u) { u[u.NoValue = 0] = "NoValue", u[u.Unquoted = 1] = "Unquoted", u[u.Single = 2] = "Single", u[u.Double = 3] = "Double"; })(K || (K = {}));
var M = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Au = (function () {
    function Au(_a, r) {
        var _b = _a.xmlMode, e = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = f.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = t, this.entityDecoder = new wu(e ? _u : Yu, function (a, i) { return _this.emitCodePoint(a, i); });
    }
    Au.prototype.reset = function () { this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = f.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Au.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Au.prototype.end = function () { this.running && this.finish(); };
    Au.prototype.pause = function () { this.running = !1; };
    Au.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Au.prototype.stateText = function (e) { e === x.Lt || !this.decodeEntities && this.fastForwardTo(x.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = f.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === x.Amp && this.startEntity(); };
    Au.prototype.stateSpecialStartSequence = function (e) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? ue(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = f.InTagName, this.stateInTagName(e); };
    Au.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === x.Gt || tu(e)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === M.TitleEnd ? this.decodeEntities && e === x.Amp && this.startEntity() : this.fastForwardTo(x.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === x.Lt); };
    Au.prototype.stateCDATASequence = function (e) { e === M.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === M.Cdata.length && (this.state = f.InCommentLike, this.currentSequence = M.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = f.InDeclaration, this.stateInDeclaration(e)); };
    Au.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Au.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === M.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = f.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Au.prototype.isTagStartChar = function (e) { return this.xmlMode ? !ue(e) : fr(e); };
    Au.prototype.startSpecial = function (e, t) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = t, this.state = f.SpecialStartSequence; };
    Au.prototype.stateBeforeTagName = function (e) { if (e === x.ExclamationMark)
        this.state = f.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === x.Questionmark)
        this.state = f.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var t = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = f.InTagName : t === M.ScriptEnd[2] ? this.state = f.BeforeSpecialS : t === M.TitleEnd[2] ? this.state = f.BeforeSpecialT : this.state = f.InTagName;
    }
    else
        e === x.Slash ? this.state = f.BeforeClosingTagName : (this.state = f.Text, this.stateText(e)); };
    Au.prototype.stateInTagName = function (e) { ue(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Au.prototype.stateBeforeClosingTagName = function (e) { tu(e) || (e === x.Gt ? this.state = f.Text : (this.state = this.isTagStartChar(e) ? f.InClosingTagName : f.InSpecialComment, this.sectionStart = this.index)); };
    Au.prototype.stateInClosingTagName = function (e) { (e === x.Gt || tu(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Au.prototype.stateAfterClosingTagName = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.state = f.Text, this.sectionStart = this.index + 1); };
    Au.prototype.stateBeforeAttributeName = function (e) { e === x.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = f.InSpecialTag, this.sequenceIndex = 0) : this.state = f.Text, this.sectionStart = this.index + 1) : e === x.Slash ? this.state = f.InSelfClosingTag : tu(e) || (this.state = f.InAttributeName, this.sectionStart = this.index); };
    Au.prototype.stateInSelfClosingTag = function (e) { e === x.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = f.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : tu(e) || (this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Au.prototype.stateInAttributeName = function (e) { (e === x.Eq || ue(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = f.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Au.prototype.stateAfterAttributeName = function (e) { e === x.Eq ? this.state = f.BeforeAttributeValue : e === x.Slash || e === x.Gt ? (this.cbs.onattribend(K.NoValue, this.sectionStart), this.sectionStart = -1, this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)) : tu(e) || (this.cbs.onattribend(K.NoValue, this.sectionStart), this.state = f.InAttributeName, this.sectionStart = this.index); };
    Au.prototype.stateBeforeAttributeValue = function (e) { e === x.DoubleQuote ? (this.state = f.InAttributeValueDq, this.sectionStart = this.index + 1) : e === x.SingleQuote ? (this.state = f.InAttributeValueSq, this.sectionStart = this.index + 1) : tu(e) || (this.sectionStart = this.index, this.state = f.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Au.prototype.handleInAttributeValue = function (e, t) { e === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === x.DoubleQuote ? K.Double : K.Single, this.index + 1), this.state = f.BeforeAttributeName) : this.decodeEntities && e === x.Amp && this.startEntity(); };
    Au.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, x.DoubleQuote); };
    Au.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, x.SingleQuote); };
    Au.prototype.stateInAttributeValueNoQuotes = function (e) { tu(e) || e === x.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(K.Unquoted, this.index), this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === x.Amp && this.startEntity(); };
    Au.prototype.stateBeforeDeclaration = function (e) { e === x.OpeningSquareBracket ? (this.state = f.CDATASequence, this.sequenceIndex = 0) : this.state = e === x.Dash ? f.BeforeComment : f.InDeclaration; };
    Au.prototype.stateInDeclaration = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1); };
    Au.prototype.stateInProcessingInstruction = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1); };
    Au.prototype.stateBeforeComment = function (e) { e === x.Dash ? (this.state = f.InCommentLike, this.currentSequence = M.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = f.InDeclaration; };
    Au.prototype.stateInSpecialComment = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = f.Text, this.sectionStart = this.index + 1); };
    Au.prototype.stateBeforeSpecialS = function (e) { var t = e | 32; t === M.ScriptEnd[3] ? this.startSpecial(M.ScriptEnd, 4) : t === M.StyleEnd[3] ? this.startSpecial(M.StyleEnd, 4) : (this.state = f.InTagName, this.stateInTagName(e)); };
    Au.prototype.stateBeforeSpecialT = function (e) { var t = e | 32; t === M.TitleEnd[3] ? this.startSpecial(M.TitleEnd, 4) : t === M.TextareaEnd[3] ? this.startSpecial(M.TextareaEnd, 4) : (this.state = f.InTagName, this.stateInTagName(e)); };
    Au.prototype.startEntity = function () { this.baseState = this.state, this.state = f.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? $.Strict : this.baseState === f.Text || this.baseState === f.InSpecialTag ? $.Legacy : $.Attribute); };
    Au.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Au.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === f.Text || this.state === f.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === f.InAttributeValueDq || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Au.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Au.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case f.Text: {
                this.stateText(e);
                break;
            }
            case f.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case f.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case f.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case f.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case f.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case f.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case f.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case f.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case f.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case f.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case f.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case f.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case f.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case f.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case f.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case f.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case f.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case f.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case f.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case f.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case f.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case f.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case f.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case f.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case f.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Au.prototype.finish = function () { this.state === f.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Au.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === f.InCommentLike ? this.currentSequence === M.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === f.InTagName || this.state === f.BeforeAttributeName || this.state === f.BeforeAttributeValue || this.state === f.AfterAttributeName || this.state === f.InAttributeName || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueDq || this.state === f.InAttributeValueNq || this.state === f.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Au.prototype.emitCodePoint = function (e, t) { this.baseState !== f.Text && this.baseState !== f.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Au;
}());
var vu = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), q = new Set(["p"]), Vt = new Set(["thead", "tbody"]), jt = new Set(["dd", "dt"]), zt = new Set(["rt", "rp"]), dr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", q], ["h1", q], ["h2", q], ["h3", q], ["h4", q], ["h5", q], ["h6", q], ["select", vu], ["input", vu], ["output", vu], ["button", vu], ["datalist", vu], ["textarea", vu], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", jt], ["dt", jt], ["address", q], ["article", q], ["aside", q], ["blockquote", q], ["details", q], ["div", q], ["dl", q], ["fieldset", q], ["figcaption", q], ["figure", q], ["footer", q], ["form", q], ["header", q], ["hr", q], ["main", q], ["nav", q], ["ol", q], ["pre", q], ["section", q], ["table", q], ["ul", q], ["rt", zt], ["rp", zt], ["tbody", Vt], ["tfoot", Vt]]), hr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Wt = new Set(["math", "svg"]), $t = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), br = /\s|\//, Ru = (function () {
    function Ru(e, t) {
        if (t === void 0) { t = {}; }
        var r, a, i, n, s, c;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = t.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (i = t.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((n = t.Tokenizer) !== null && n !== void 0 ? n : Au)(this.options, this), this.foreignContext = [!this.htmlMode], (c = (s = this.cbs).onparserinit) === null || c === void 0 || c.call(s, this);
    }
    Ru.prototype.ontext = function (e, t) { var r, a; var i = this.getSlice(e, t); this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, i), this.startIndex = t; };
    Ru.prototype.ontextentity = function (e, t) { var r, a; this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, Su(e)), this.startIndex = t; };
    Ru.prototype.isVoidElement = function (e) { return this.htmlMode && hr.has(e); };
    Ru.prototype.onopentagname = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Ru.prototype.emitOpenTag = function (e) { var t, r, a, i; this.openTagStart = this.startIndex, this.tagname = e; var n = this.htmlMode && dr.get(e); if (n)
        for (; this.stack.length > 0 && n.has(this.stack[0]);) {
            var s = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, s, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Wt.has(e) ? this.foreignContext.unshift(!0) : $t.has(e) && this.foreignContext.unshift(!1))), (i = (a = this.cbs).onopentagname) === null || i === void 0 || i.call(a, e), this.cbs.onopentag && (this.attribs = {}); };
    Ru.prototype.endOpenTag = function (e) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Ru.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Ru.prototype.onclosetag = function (e, t) { var r, a, i, n, s, c, o, d; this.endIndex = t; var y = this.getSlice(e, t); if (this.lowerCaseTagNames && (y = y.toLowerCase()), this.htmlMode && (Wt.has(y) || $t.has(y)) && this.foreignContext.shift(), this.isVoidElement(y))
        this.htmlMode && y === "br" && ((n = (i = this.cbs).onopentagname) === null || n === void 0 || n.call(i, "br"), (c = (s = this.cbs).onopentag) === null || c === void 0 || c.call(s, "br", {}, !0), (d = (o = this.cbs).onclosetag) === null || d === void 0 || d.call(o, "br", !1));
    else {
        var h = this.stack.indexOf(y);
        if (h !== -1)
            for (var b = 0; b <= h; b++) {
                var S = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, S, b !== h);
            }
        else
            this.htmlMode && y === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Ru.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Ru.prototype.closeCurrentTag = function (e) { var t, r; var a = this.tagname; this.endOpenTag(e), this.stack[0] === a && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, a, !e), this.stack.shift()); };
    Ru.prototype.onattribname = function (e, t) { this.startIndex = e; var r = this.getSlice(e, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Ru.prototype.onattribdata = function (e, t) { this.attribvalue += this.getSlice(e, t); };
    Ru.prototype.onattribentity = function (e) { this.attribvalue += Su(e); };
    Ru.prototype.onattribend = function (e, t) { var r, a; this.endIndex = t, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, e === K.Double ? '"' : e === K.Single ? "'" : e === K.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Ru.prototype.getInstructionName = function (e) { var t = e.search(br), r = t < 0 ? e : e.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Ru.prototype.ondeclaration = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = t + 1; };
    Ru.prototype.onprocessinginstruction = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = t + 1; };
    Ru.prototype.oncomment = function (e, t, r) { var a, i, n, s; this.endIndex = t, (i = (a = this.cbs).oncomment) === null || i === void 0 || i.call(a, this.getSlice(e, t - r)), (s = (n = this.cbs).oncommentend) === null || s === void 0 || s.call(n), this.startIndex = t + 1; };
    Ru.prototype.oncdata = function (e, t, r) { var a, i, n, s, c, o, d, y, h, b; this.endIndex = t; var S = this.getSlice(e, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((i = (a = this.cbs).oncdatastart) === null || i === void 0 || i.call(a), (s = (n = this.cbs).ontext) === null || s === void 0 || s.call(n, S), (o = (c = this.cbs).oncdataend) === null || o === void 0 || o.call(c)) : ((y = (d = this.cbs).oncomment) === null || y === void 0 || y.call(d, "[CDATA[".concat(S, "]]")), (b = (h = this.cbs).oncommentend) === null || b === void 0 || b.call(h)), this.startIndex = t + 1; };
    Ru.prototype.onend = function () { var e, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e); };
    Ru.prototype.reset = function () { var e, t, r, a; (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Ru.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Ru.prototype.getSlice = function (e, t) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Ru.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Ru.prototype.write = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Ru.prototype.end = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Ru.prototype.pause = function () { this.tokenizer.pause(); };
    Ru.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Ru.prototype.parseChunk = function (e) { this.write(e); };
    Ru.prototype.done = function (e) { this.end(e); };
    return Ru;
}());
var ee = {};
De(ee, { CDATA: function () { return ze; }, Comment: function () { return Pe; }, Directive: function () { return He; }, Doctype: function () { return We; }, ElementType: function () { return v; }, Root: function () { return Fe; }, Script: function () { return Ge; }, Style: function () { return Ve; }, Tag: function () { return je; }, Text: function () { return Be; }, isTag: function () { return Re; } });
var v;
(function (u) { u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype"; })(v || (v = {}));
function Re(u) { return u.type === v.Tag || u.type === v.Script || u.type === v.Style; }
var Fe = v.Root, Be = v.Text, He = v.Directive, Pe = v.Comment, Ge = v.Script, Ve = v.Style, je = v.Tag, ze = v.CDATA, We = v.Doctype;
var te = (function () {
    function te() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(te.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(te.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(te.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    te.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Kt(this, e);
    };
    return te;
}()), Fu = (function (_super) {
    __extends(Fu, _super);
    function Fu(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(Fu.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return Fu;
}(te)), Eu = (function (_super) {
    __extends(Eu, _super);
    function Eu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.Text;
        return _this;
    }
    Object.defineProperty(Eu.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Eu;
}(Fu)), Bu = (function (_super) {
    __extends(Bu, _super);
    function Bu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.Comment;
        return _this;
    }
    Object.defineProperty(Bu.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Bu;
}(Fu)), Hu = (function (_super) {
    __extends(Hu, _super);
    function Hu(e, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = e, _this.type = v.Directive;
        return _this;
    }
    Object.defineProperty(Hu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Hu;
}(Fu)), Pu = (function (_super) {
    __extends(Pu, _super);
    function Pu(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Pu.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pu.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pu.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Pu;
}(te)), Gu = (function (_super) {
    __extends(Gu, _super);
    function Gu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.CDATA;
        return _this;
    }
    Object.defineProperty(Gu.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Gu;
}(Pu)), Tu = (function (_super) {
    __extends(Tu, _super);
    function Tu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.Root;
        return _this;
    }
    Object.defineProperty(Tu.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Tu;
}(Pu)), Vu = (function (_super) {
    __extends(Vu, _super);
    function Vu(e, t, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = e === "script" ? v.Script : e === "style" ? v.Style : v.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = t, _this.type = a;
        return _this;
    }
    Object.defineProperty(Vu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var t, r; return { name: e, value: _this.attribs[e], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Vu;
}(Pu));
function C(u) { return Re(u); }
function Nu(u) { return u.type === v.CDATA; }
function _(u) { return u.type === v.Text; }
function ju(u) { return u.type === v.Comment; }
function pr(u) { return u.type === v.Directive; }
function Ke(u) { return u.type === v.Root; }
function H(u) { return Object.prototype.hasOwnProperty.call(u, "children"); }
function Kt(u, e) {
    if (e === void 0) { e = !1; }
    var t;
    if (_(u))
        t = new Eu(u.data);
    else if (ju(u))
        t = new Bu(u.data);
    else if (C(u)) {
        var r = e ? $e(u.children) : [], a_1 = new Vu(u.name, J({}, u.attribs), r);
        r.forEach(function (i) { return i.parent = a_1; }), u.namespace != null && (a_1.namespace = u.namespace), u["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = J({}, u["x-attribsNamespace"])), u["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = J({}, u["x-attribsPrefix"])), t = a_1;
    }
    else if (Nu(u)) {
        var r = e ? $e(u.children) : [], a_2 = new Gu(r);
        r.forEach(function (i) { return i.parent = a_2; }), t = a_2;
    }
    else if (Ke(u)) {
        var r = e ? $e(u.children) : [], a_3 = new Tu(r);
        r.forEach(function (i) { return i.parent = a_3; }), u["x-mode"] && (a_3["x-mode"] = u["x-mode"]), t = a_3;
    }
    else if (pr(u)) {
        var r = new Hu(u.name, u.data);
        u["x-name"] != null && (r["x-name"] = u["x-name"], r["x-publicId"] = u["x-publicId"], r["x-systemId"] = u["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(u.type));
    return t.startIndex = u.startIndex, t.endIndex = u.endIndex, u.sourceCodeLocation != null && (t.sourceCodeLocation = u.sourceCodeLocation), t;
}
function $e(u) { var e = u.map(function (t) { return Kt(t, !0); }); for (var t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t]; return e; }
var Qt = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Cu = (function () {
    function Cu(e, t, r) {
        this.dom = [], this.root = new Tu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Qt), typeof e == "object" && (t = e, e = void 0), this.callback = e != null ? e : null, this.options = t != null ? t : Qt, this.elementCB = r != null ? r : null;
    }
    Cu.prototype.onparserinit = function (e) { this.parser = e; };
    Cu.prototype.onreset = function () { this.dom = [], this.root = new Tu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Cu.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Cu.prototype.onerror = function (e) { this.handleCallback(e); };
    Cu.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Cu.prototype.onopentag = function (e, t) { var r = this.options.xmlMode ? v.Tag : void 0, a = new Vu(e, t, void 0, r); this.addNode(a), this.tagStack.push(a); };
    Cu.prototype.ontext = function (e) { var t = this.lastNode; if (t && t.type === v.Text)
        t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Eu(e);
        this.addNode(r), this.lastNode = r;
    } };
    Cu.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === v.Comment) {
        this.lastNode.data += e;
        return;
    } var t = new Bu(e); this.addNode(t), this.lastNode = t; };
    Cu.prototype.oncommentend = function () { this.lastNode = null; };
    Cu.prototype.oncdatastart = function () { var e = new Eu(""), t = new Gu([e]); this.addNode(t), e.parent = t, this.lastNode = e; };
    Cu.prototype.oncdataend = function () { this.lastNode = null; };
    Cu.prototype.onprocessinginstruction = function (e, t) { var r = new Hu(e, t); this.addNode(r); };
    Cu.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Cu.prototype.addNode = function (e) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), r && (e.prev = r, r.next = e), e.parent = t, this.lastNode = null; };
    return Cu;
}());
var uu = {};
De(uu, { DocumentPosition: function () { return Q; }, append: function () { return Mr; }, appendChild: function () { return Or; }, compareDocumentPosition: function () { return o0; }, existsOne: function () { return s0; }, filter: function () { return ku; }, find: function () { return oe; }, findAll: function () { return Br; }, findOne: function () { return le; }, findOneChild: function () { return Fr; }, getAttributeValue: function () { return Lr; }, getChildren: function () { return se; }, getElementById: function () { return Vr; }, getElements: function () { return Gr; }, getElementsByClassName: function () { return jr; }, getElementsByTagName: function () { return pu; }, getElementsByTagType: function () { return zr; }, getFeed: function () { return it; }, getInnerHTML: function () { return kr; }, getName: function () { return Dr; }, getOuterHTML: function () { return i0; }, getParent: function () { return n0; }, getSiblings: function () { return ce; }, getText: function () { return ne; }, hasAttrib: function () { return Ir; }, hasChildren: function () { return H; }, innerText: function () { return _e; }, isCDATA: function () { return Nu; }, isComment: function () { return ju; }, isDocument: function () { return Ke; }, isTag: function () { return C; }, isText: function () { return _; }, nextElementSibling: function () { return ut; }, prepend: function () { return tt; }, prependChild: function () { return Rr; }, prevElementSibling: function () { return et; }, removeElement: function () { return ru; }, removeSubsets: function () { return Wr; }, replaceElement: function () { return Ur; }, testElement: function () { return Pr; }, textContent: function () { return cu; }, uniqueSort: function () { return at; } });
function re(u) { for (var e = 1; e < u.length; e++)
    u[e][0] += u[e - 1][0] + 1; return u; }
var gr = new Map(re([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(re([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(re([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(re([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Qe = /["&'<>$\x80-\uFFFF]/g, Xt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Zt = String.prototype.codePointAt != null ? function (u, e) { return u.codePointAt(e); } : function (u, e) { return (u.charCodeAt(e) & 64512) === 55296 ? (u.charCodeAt(e) - 55296) * 1024 + u.charCodeAt(e + 1) - 56320 + 65536 : u.charCodeAt(e); };
function zu(u) { var e = "", t = 0, r; for (; (r = Qe.exec(u)) !== null;) {
    var a = r.index, i = u.charCodeAt(a), n = Xt.get(i);
    n !== void 0 ? (e += u.substring(t, a) + n, t = a + 1) : (e += "".concat(u.substring(t, a), "&#x").concat(Zt(u, a).toString(16), ";"), t = Qe.lastIndex += +((i & 64512) === 55296));
} return e + u.substr(t); }
function Xe(u, e) { return function (r) { var a, i = 0, n = ""; for (; a = u.exec(r);)
    i !== a.index && (n += r.substring(i, a.index)), n += e.get(a[0].charCodeAt(0)), i = a.index + 1; return n + r.substring(i); }; }
var Jt = Xe(/[&<>'"]/g, Xt), ae = Xe(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), ie = Xe(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Yt;
(function (u) { u[u.XML = 0] = "XML", u[u.HTML = 1] = "HTML"; })(Yt || (Yt = {}));
var _t;
(function (u) { u[u.UTF8 = 0] = "UTF8", u[u.ASCII = 1] = "ASCII", u[u.Extensive = 2] = "Extensive", u[u.Attribute = 3] = "Attribute", u[u.Text = 4] = "Text"; })(_t || (_t = {}));
var t0 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (u) { return [u.toLowerCase(), u]; })), r0 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (u) { return [u.toLowerCase(), u]; }));
var xr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function yr(u) { return u.replace(/"/g, "&quot;"); }
function Sr(u, e) { var t; if (!u)
    return; var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? yr : e.xmlMode || e.encodeEntities !== "utf8" ? zu : ae; return Object.keys(u).map(function (a) { var i, n; var s = (i = u[a]) !== null && i !== void 0 ? i : ""; return e.xmlMode === "foreign" && (a = (n = r0.get(a)) !== null && n !== void 0 ? n : a), !e.emptyAttrs && !e.xmlMode && s === "" ? a : "".concat(a, "=\"").concat(r(s), "\""); }).join(" "); }
var a0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Ye(u, e) {
    if (e === void 0) { e = {}; }
    var t = "length" in u ? u : [u], r = "";
    for (var a = 0; a < t.length; a++)
        r += wr(t[a], e);
    return r;
}
var qu = Ye;
function wr(u, e) { switch (u.type) {
    case Fe: return Ye(u.children, e);
    case We:
    case He: return Tr(u);
    case Pe: return qr(u);
    case ze: return Cr(u);
    case Ge:
    case Ve:
    case je: return Er(u, e);
    case Be: return Nr(u, e);
} }
var Ar = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), vr = new Set(["svg", "math"]);
function Er(u, e) { var t; e.xmlMode === "foreign" && (u.name = (t = t0.get(u.name)) !== null && t !== void 0 ? t : u.name, u.parent && Ar.has(u.parent.name) && (e = hu(J({}, e), { xmlMode: !1 }))), !e.xmlMode && vr.has(u.name) && (e = hu(J({}, e), { xmlMode: "foreign" })); var r = "<".concat(u.name), a = Sr(u.attribs, e); return a && (r += " ".concat(a)), u.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && a0.has(u.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", u.children.length > 0 && (r += Ye(u.children, e)), (e.xmlMode || !a0.has(u.name)) && (r += "</".concat(u.name, ">"))), r; }
function Tr(u) { return "<".concat(u.data, ">"); }
function Nr(u, e) { var t; var r = u.data || ""; return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && u.parent && xr.has(u.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? zu(r) : ie(r)), r; }
function Cr(u) { return "<![CDATA[".concat(u.children[0].data, "]]>"); }
function qr(u) { return "<!--".concat(u.data, "-->"); }
function i0(u, e) { return qu(u, e); }
function kr(u, e) { return H(u) ? u.children.map(function (t) { return i0(t, e); }).join("") : ""; }
function ne(u) {
    return Array.isArray(u) ? u.map(ne).join("") : C(u) ? u.name === "br" ? "\n" : ne(u.children) : Nu(u) ? ne(u.children) : _(u) ? u.data : "";
}
function cu(u) { return Array.isArray(u) ? u.map(cu).join("") : H(u) && !ju(u) ? cu(u.children) : _(u) ? u.data : ""; }
function _e(u) { return Array.isArray(u) ? u.map(_e).join("") : H(u) && (u.type === v.Tag || Nu(u)) ? _e(u.children) : _(u) ? u.data : ""; }
function se(u) { return H(u) ? u.children : []; }
function n0(u) { return u.parent || null; }
function ce(u) {
    var _a, _b;
    var e = n0(u);
    if (e != null)
        return se(e);
    var t = [u], r = u.prev, a = u.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; a != null;)
        t.push(a), _b = a, a = _b.next;
    return t;
}
function Lr(u, e) { var t; return (t = u.attribs) === null || t === void 0 ? void 0 : t[e]; }
function Ir(u, e) { return u.attribs != null && Object.prototype.hasOwnProperty.call(u.attribs, e) && u.attribs[e] != null; }
function Dr(u) { return u.name; }
function ut(u) {
    var _a;
    var e = u.next;
    for (; e !== null && !C(e);)
        (_a = e, e = _a.next);
    return e;
}
function et(u) {
    var _a;
    var e = u.prev;
    for (; e !== null && !C(e);)
        (_a = e, e = _a.prev);
    return e;
}
function ru(u) { if (u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), u.parent) {
    var e = u.parent.children, t = e.lastIndexOf(u);
    t >= 0 && e.splice(t, 1);
} u.next = null, u.prev = null, u.parent = null; }
function Ur(u, e) { var t = e.prev = u.prev; t && (t.next = e); var r = e.next = u.next; r && (r.prev = e); var a = e.parent = u.parent; if (a) {
    var i = a.children;
    i[i.lastIndexOf(u)] = e, u.parent = null;
} }
function Or(u, e) { if (ru(e), e.next = null, e.parent = u, u.children.push(e) > 1) {
    var t = u.children[u.children.length - 2];
    t.next = e, e.prev = t;
}
else
    e.prev = null; }
function Mr(u, e) { ru(e); var t = u.parent, r = u.next; if (e.next = r, e.prev = u, u.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
        var a = t.children;
        a.splice(a.lastIndexOf(r), 0, e);
    }
}
else
    t && t.children.push(e); }
function Rr(u, e) { if (ru(e), e.parent = u, e.prev = null, u.children.unshift(e) !== 1) {
    var t = u.children[1];
    t.prev = e, e.next = t;
}
else
    e.next = null; }
function tt(u, e) { ru(e); var t = u.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(u), 0, e);
} u.prev && (u.prev.next = e), e.parent = t, e.prev = u.prev, e.next = u, u.prev = e; }
function ku(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return oe(u, Array.isArray(e) ? e : [e], t, r);
}
function oe(u, e, t, r) { var a = [], i = [Array.isArray(e) ? e : [e]], n = [0]; for (;;) {
    if (n[0] >= i[0].length) {
        if (n.length === 1)
            return a;
        i.shift(), n.shift();
        continue;
    }
    var s = i[0][n[0]++];
    if (u(s) && (a.push(s), --r <= 0))
        return a;
    t && H(s) && s.children.length > 0 && (n.unshift(0), i.unshift(s.children));
} }
function Fr(u, e) { return e.find(u); }
function le(u, e, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var a = 0; a < r.length; a++) {
        var i = r[a];
        if (C(i) && u(i))
            return i;
        if (t && H(i) && i.children.length > 0) {
            var n = le(u, i.children, !0);
            if (n)
                return n;
        }
    }
    return null;
}
function s0(u, e) { return (Array.isArray(e) ? e : [e]).some(function (t) { return C(t) && u(t) || H(t) && s0(u, t.children); }); }
function Br(u, e) { var t = [], r = [Array.isArray(e) ? e : [e]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), a.shift();
        continue;
    }
    var i = r[0][a[0]++];
    C(i) && u(i) && t.push(i), H(i) && i.children.length > 0 && (a.unshift(0), r.unshift(i.children));
} }
var fe = { tag_name: function (u) { return typeof u == "function" ? function (e) { return C(e) && u(e.name); } : u === "*" ? C : function (e) { return C(e) && e.name === u; }; }, tag_type: function (u) { return typeof u == "function" ? function (e) { return u(e.type); } : function (e) { return e.type === u; }; }, tag_contains: function (u) { return typeof u == "function" ? function (e) { return _(e) && u(e.data); } : function (e) { return _(e) && e.data === u; }; } };
function rt(u, e) { return typeof e == "function" ? function (t) { return C(t) && e(t.attribs[u]); } : function (t) { return C(t) && t.attribs[u] === e; }; }
function Hr(u, e) { return function (t) { return u(t) || e(t); }; }
function c0(u) { var e = Object.keys(u).map(function (t) { var r = u[t]; return Object.prototype.hasOwnProperty.call(fe, t) ? fe[t](r) : rt(t, r); }); return e.length === 0 ? null : e.reduce(Hr); }
function Pr(u, e) { var t = c0(u); return t ? t(e) : !0; }
function Gr(u, e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = c0(u);
    return a ? ku(a, e, t, r) : [];
}
function Vr(u, e, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(e) || (e = [e]), le(rt("id", u), e, t);
}
function pu(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ku(fe.tag_name(u), e, t, r);
}
function jr(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ku(rt("class", u), e, t, r);
}
function zr(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ku(fe.tag_type(u), e, t, r);
}
function Wr(u) { var e = u.length; for (; --e >= 0;) {
    var t = u[e];
    if (e > 0 && u.lastIndexOf(t, e - 1) >= 0) {
        u.splice(e, 1);
        continue;
    }
    for (var r = t.parent; r; r = r.parent)
        if (u.includes(r)) {
            u.splice(e, 1);
            break;
        }
} return u; }
var Q;
(function (u) { u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY"; })(Q || (Q = {}));
function o0(u, e) { var t = [], r = []; if (u === e)
    return 0; var a = H(u) ? u : u.parent; for (; a;)
    t.unshift(a), a = a.parent; for (a = H(e) ? e : e.parent; a;)
    r.unshift(a), a = a.parent; var i = Math.min(t.length, r.length), n = 0; for (; n < i && t[n] === r[n];)
    n++; if (n === 0)
    return Q.DISCONNECTED; var s = t[n - 1], c = s.children, o = t[n], d = r[n]; return c.indexOf(o) > c.indexOf(d) ? s === e ? Q.FOLLOWING | Q.CONTAINED_BY : Q.FOLLOWING : s === u ? Q.PRECEDING | Q.CONTAINS : Q.PRECEDING; }
function at(u) { return u = u.filter(function (e, t, r) { return !r.includes(e, t + 1); }), u.sort(function (e, t) { var r = o0(e, t); return r & Q.PRECEDING ? -1 : r & Q.FOLLOWING ? 1 : 0; }), u; }
function it(u) { var e = de(Zr, u); return e ? e.name === "feed" ? $r(e) : Kr(e) : null; }
function $r(u) { var e; var t = u.children, r = { type: "atom", items: pu("entry", t).map(function (n) { var s; var c = n.children, o = { media: l0(c) }; j(o, "id", "id", c), j(o, "title", "title", c); var d = (s = de("link", c)) === null || s === void 0 ? void 0 : s.attribs.href; d && (o.link = d); var y = ou("summary", c) || ou("content", c); y && (o.description = y); var h = ou("updated", c); return h && (o.pubDate = new Date(h)), o; }) }; j(r, "id", "id", t), j(r, "title", "title", t); var a = (e = de("link", t)) === null || e === void 0 ? void 0 : e.attribs.href; a && (r.link = a), j(r, "description", "subtitle", t); var i = ou("updated", t); return i && (r.updated = new Date(i)), j(r, "author", "email", t, !0), r; }
function Kr(u) { var e, t; var r = (t = (e = de("channel", u.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], a = { type: u.name.substr(0, 3), id: "", items: pu("item", u.children).map(function (n) { var s = n.children, c = { media: l0(s) }; j(c, "id", "guid", s), j(c, "title", "title", s), j(c, "link", "link", s), j(c, "description", "description", s); var o = ou("pubDate", s) || ou("dc:date", s); return o && (c.pubDate = new Date(o)), c; }) }; j(a, "title", "title", r), j(a, "link", "link", r), j(a, "description", "description", r); var i = ou("lastBuildDate", r); return i && (a.updated = new Date(i)), j(a, "author", "managingEditor", r, !0), a; }
var Qr = ["url", "type", "lang"], Xr = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function l0(u) { return pu("media:content", u).map(function (e) {
    var e_4, _a, e_5, _b;
    var t = e.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var Qr_1 = __values(Qr), Qr_1_1 = Qr_1.next(); !Qr_1_1.done; Qr_1_1 = Qr_1.next()) {
            var a = Qr_1_1.value;
            t[a] && (r[a] = t[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Qr_1_1 && !Qr_1_1.done && (_a = Qr_1.return)) _a.call(Qr_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Xr_1 = __values(Xr), Xr_1_1 = Xr_1.next(); !Xr_1_1.done; Xr_1_1 = Xr_1.next()) {
            var a = Xr_1_1.value;
            t[a] && (r[a] = parseInt(t[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Xr_1_1 && !Xr_1_1.done && (_b = Xr_1.return)) _b.call(Xr_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function de(u, e) { return pu(u, e, !0, 1)[0]; }
function ou(u, e, t) {
    if (t === void 0) { t = !1; }
    return cu(pu(u, e, t, 1)).trim();
}
function j(u, e, t, r, a) {
    if (a === void 0) { a = !1; }
    var i = ou(t, r, a);
    i && (u[e] = i);
}
function Zr(u) { return u === "rss" || u === "feed" || u === "rdf:RDF"; }
function f0(u, e) { var t = new Cu(void 0, e); return new Ru(t, e).end(u), t.root; }
var p;
(function (u) { u.Attribute = "attribute", u.Pseudo = "pseudo", u.PseudoElement = "pseudo-element", u.Tag = "tag", u.Universal = "universal", u.Adjacent = "adjacent", u.Child = "child", u.Descendant = "descendant", u.Parent = "parent", u.Sibling = "sibling", u.ColumnCombinator = "column-combinator"; })(p || (p = {}));
var I;
(function (u) { u.Any = "any", u.Element = "element", u.End = "end", u.Equals = "equals", u.Exists = "exists", u.Hyphen = "hyphen", u.Not = "not", u.Start = "start"; })(I || (I = {}));
var d0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Jr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Yr = new Map([[126, I.Element], [94, I.Start], [36, I.End], [42, I.Any], [33, I.Not], [124, I.Hyphen]]), _r = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function gu(u) { switch (u.type) {
    case p.Adjacent:
    case p.Child:
    case p.Descendant:
    case p.Parent:
    case p.Sibling:
    case p.ColumnCombinator: return !0;
    default: return !1;
} }
var ua = new Set(["contains", "icontains"]);
function ea(u, e, t) { var r = parseInt(e, 16) - 65536; return r !== r || t ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Wu(u) { return u.replace(Jr, ea); }
function nt(u) { return u === 39 || u === 34; }
function h0(u) { return u === 32 || u === 9 || u === 10 || u === 12 || u === 13; }
function lu(u) { var e = [], t = b0(e, "".concat(u), 0); if (t < u.length)
    throw new Error("Unmatched selector: ".concat(u.slice(t))); return e; }
function b0(u, e, t) { var r = []; function a(h) { var b = e.slice(t + h).match(d0); if (!b)
    throw new Error("Expected name, found ".concat(e.slice(t))); var _a = __read(b, 1), S = _a[0]; return t += h + S.length, Wu(S); } function i(h) { for (t += h; t < e.length && h0(e.charCodeAt(t));)
    t++; } function n() { t += 1; var h = t, b = 1; for (; b > 0 && t < e.length; t++)
    e.charCodeAt(t) === 40 && !s(t) ? b++ : e.charCodeAt(t) === 41 && !s(t) && b--; if (b)
    throw new Error("Parenthesis not matched"); return Wu(e.slice(h, t - 1)); } function s(h) { var b = 0; for (; e.charCodeAt(--h) === 92;)
    b++; return (b & 1) === 1; } function c() { if (r.length > 0 && gu(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function o(h) { if (r.length > 0 && r[r.length - 1].type === p.Descendant) {
    r[r.length - 1].type = h;
    return;
} c(), r.push({ type: h }); } function d(h, b) { r.push({ type: p.Attribute, name: h, action: b, value: a(1), namespace: null, ignoreCase: "quirks" }); } function y() { if (r.length && r[r.length - 1].type === p.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); u.push(r); } if (i(0), e.length === t)
    return t; u: for (; t < e.length;) {
    var h = e.charCodeAt(t);
    switch (h) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== p.Descendant) && (c(), r.push({ type: p.Descendant })), i(1);
            break;
        }
        case 62: {
            o(p.Child), i(1);
            break;
        }
        case 60: {
            o(p.Parent), i(1);
            break;
        }
        case 126: {
            o(p.Sibling), i(1);
            break;
        }
        case 43: {
            o(p.Adjacent), i(1);
            break;
        }
        case 46: {
            d("class", I.Element);
            break;
        }
        case 35: {
            d("id", I.Equals);
            break;
        }
        case 91: {
            i(1);
            var b = void 0, S = null;
            e.charCodeAt(t) === 124 ? b = a(1) : e.startsWith("*|", t) ? (S = "*", b = a(2)) : (b = a(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (S = b, b = a(1))), i(0);
            var w = I.Exists, R = Yr.get(e.charCodeAt(t));
            if (R) {
                if (w = R, e.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                i(2);
            }
            else
                e.charCodeAt(t) === 61 && (w = I.Equals, i(1));
            var P = "", Z = null;
            if (w !== "exists") {
                if (nt(e.charCodeAt(t))) {
                    var D = e.charCodeAt(t), T = t + 1;
                    for (; T < e.length && (e.charCodeAt(T) !== D || s(T));)
                        T += 1;
                    if (e.charCodeAt(T) !== D)
                        throw new Error("Attribute value didn't end");
                    P = Wu(e.slice(t + 1, T)), t = T + 1;
                }
                else {
                    var D = t;
                    for (; t < e.length && (!h0(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || s(t));)
                        t += 1;
                    P = Wu(e.slice(D, t));
                }
                i(0);
                var k = e.charCodeAt(t) | 32;
                k === 115 ? (Z = !1, i(1)) : k === 105 && (Z = !0, i(1));
            }
            if (e.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var E = { type: p.Attribute, name: b, action: w, value: P, namespace: S, ignoreCase: Z };
            r.push(E);
            break;
        }
        case 58: {
            if (e.charCodeAt(t + 1) === 58) {
                r.push({ type: p.PseudoElement, name: a(2).toLowerCase(), data: e.charCodeAt(t) === 40 ? n() : null });
                continue;
            }
            var b = a(1).toLowerCase(), S = null;
            if (e.charCodeAt(t) === 40)
                if (_r.has(b)) {
                    if (nt(e.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(b, " cannot be quoted"));
                    if (S = [], t = b0(S, e, t + 1), e.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(b, " (").concat(e, ")"));
                    t += 1;
                }
                else {
                    if (S = n(), ua.has(b)) {
                        var w = S.charCodeAt(0);
                        w === S.charCodeAt(S.length - 1) && nt(w) && (S = S.slice(1, -1));
                    }
                    S = Wu(S);
                }
            r.push({ type: p.Pseudo, name: b, data: S });
            break;
        }
        case 44: {
            y(), r = [], i(1);
            break;
        }
        default: {
            if (e.startsWith("/*", t)) {
                var w = e.indexOf("*/", t + 2);
                if (w < 0)
                    throw new Error("Comment was not terminated");
                t = w + 2, r.length === 0 && i(0);
                break;
            }
            var b = null, S = void 0;
            if (h === 42)
                t += 1, S = "*";
            else if (h === 124) {
                if (S = "", e.charCodeAt(t + 1) === 124) {
                    o(p.ColumnCombinator), i(2);
                    break;
                }
            }
            else if (d0.test(e.slice(t)))
                S = a(0);
            else
                break u;
            e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (b = S, e.charCodeAt(t + 1) === 42 ? (S = "*", t += 2) : S = a(1)), r.push(S === "*" ? { type: p.Universal, namespace: b } : { type: p.Tag, name: S, namespace: b });
        }
    }
} return y(), t; }
var mt = bu(fu(), 1);
var au = bu(fu(), 1);
var g0 = new Map([[p.Universal, 50], [p.Tag, 30], [p.Attribute, 1], [p.Pseudo, 0]]);
function $u(u) { return !g0.has(u.type); }
var ta = new Map([[I.Exists, 10], [I.Equals, 8], [I.Not, 7], [I.Start, 6], [I.End, 6], [I.Any, 5]]);
function st(u) { var e = u.map(m0); for (var t = 1; t < u.length; t++) {
    var r = e[t];
    if (!(r < 0))
        for (var a = t - 1; a >= 0 && r < e[a]; a--) {
            var i = u[a + 1];
            u[a + 1] = u[a], u[a] = i, e[a + 1] = e[a], e[a] = r;
        }
} }
function m0(u) { var e, t; var r = (e = g0.get(u.type)) !== null && e !== void 0 ? e : -1; return u.type === p.Attribute ? (r = (t = ta.get(u.action)) !== null && t !== void 0 ? t : 4, u.action === I.Equals && u.name === "id" && (r = 9), u.ignoreCase && (r >>= 1)) : u.type === p.Pseudo && (u.data ? u.name === "has" || u.name === "contains" ? r = 0 : Array.isArray(u.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(u.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(m0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var Ku = bu(fu(), 1), ra = /[-[\]{}()*+?.,\\^$|#\s]/g;
function x0(u) { return u.replace(ra, "\\$&"); }
var aa = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function mu(u, e) { return typeof u.ignoreCase == "boolean" ? u.ignoreCase : u.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && aa.has(u.name); }
var y0 = { equals: function (u, e, t) { var r = t.adapter, a = e.name, i = e.value; return mu(e, t) ? (i = i.toLowerCase(), function (n) { var s = r.getAttributeValue(n, a); return s != null && s.length === i.length && s.toLowerCase() === i && u(n); }) : function (n) { return r.getAttributeValue(n, a) === i && u(n); }; }, hyphen: function (u, e, t) { var r = t.adapter, a = e.name, i = e.value, n = i.length; return mu(e, t) ? (i = i.toLowerCase(), function (c) { var o = r.getAttributeValue(c, a); return o != null && (o.length === n || o.charAt(n) === "-") && o.substr(0, n).toLowerCase() === i && u(c); }) : function (c) { var o = r.getAttributeValue(c, a); return o != null && (o.length === n || o.charAt(n) === "-") && o.substr(0, n) === i && u(c); }; }, element: function (u, e, t) { var r = t.adapter, a = e.name, i = e.value; if (/\s/.test(i))
        return Ku.default.falseFunc; var n = new RegExp("(?:^|\\s)".concat(x0(i), "(?:$|\\s)"), mu(e, t) ? "i" : ""); return function (c) { var o = r.getAttributeValue(c, a); return o != null && o.length >= i.length && n.test(o) && u(c); }; }, exists: function (u, _a, _b) {
        var e = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, e) && u(r); };
    }, start: function (u, e, t) { var r = t.adapter, a = e.name, i = e.value, n = i.length; return n === 0 ? Ku.default.falseFunc : mu(e, t) ? (i = i.toLowerCase(), function (s) { var c = r.getAttributeValue(s, a); return c != null && c.length >= n && c.substr(0, n).toLowerCase() === i && u(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, a)) === null || c === void 0) && c.startsWith(i)) && u(s); }; }, end: function (u, e, t) { var r = t.adapter, a = e.name, i = e.value, n = -i.length; return n === 0 ? Ku.default.falseFunc : mu(e, t) ? (i = i.toLowerCase(), function (s) { var c; return ((c = r.getAttributeValue(s, a)) === null || c === void 0 ? void 0 : c.substr(n).toLowerCase()) === i && u(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, a)) === null || c === void 0) && c.endsWith(i)) && u(s); }; }, any: function (u, e, t) { var r = t.adapter, a = e.name, i = e.value; if (i === "")
        return Ku.default.falseFunc; if (mu(e, t)) {
        var n_1 = new RegExp(x0(i), "i");
        return function (c) { var o = r.getAttributeValue(c, a); return o != null && o.length >= i.length && n_1.test(o) && u(c); };
    } return function (n) { var s; return !!(!((s = r.getAttributeValue(n, a)) === null || s === void 0) && s.includes(i)) && u(n); }; }, not: function (u, e, t) { var r = t.adapter, a = e.name, i = e.value; return i === "" ? function (n) { return !!r.getAttributeValue(n, a) && u(n); } : mu(e, t) ? (i = i.toLowerCase(), function (n) { var s = r.getAttributeValue(n, a); return (s == null || s.length !== i.length || s.toLowerCase() !== i) && u(n); }) : function (n) { return r.getAttributeValue(n, a) !== i && u(n); }; } };
var ia = new Set([9, 10, 12, 13, 32]), S0 = 48, na = 57;
function w0(u) { if (u = u.trim().toLowerCase(), u === "even")
    return [2, 0]; if (u === "odd")
    return [2, 1]; var e = 0, t = 0, r = i(), a = n(); if (e < u.length && u.charAt(e) === "n" && (e++, t = r * (a != null ? a : 1), s(), e < u.length ? (r = i(), s(), a = n()) : r = a = 0), a === null || e < u.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(u, "')")); return [t, r * a]; function i() { return u.charAt(e) === "-" ? (e++, -1) : (u.charAt(e) === "+" && e++, 1); } function n() { var c = e, o = 0; for (; e < u.length && u.charCodeAt(e) >= S0 && u.charCodeAt(e) <= na;)
    o = o * 10 + (u.charCodeAt(e) - S0), e++; return e === c ? null : o; } function s() { for (; e < u.length && ia.has(u.charCodeAt(e));)
    e++; } }
var ct = bu(fu(), 1);
function A0(u) { var e = u[0], t = u[1] - 1; if (t < 0 && e <= 0)
    return ct.default.falseFunc; if (e === -1)
    return function (i) { return i <= t; }; if (e === 0)
    return function (i) { return i === t; }; if (e === 1)
    return t < 0 ? ct.default.trueFunc : function (i) { return i >= t; }; var r = Math.abs(e), a = (t % r + r) % r; return e > 1 ? function (i) { return i >= t && i % r === a; } : function (i) { return i <= t && i % r === a; }; }
function Lu(u) { return A0(w0(u)); }
var z = bu(fu(), 1);
function he(u, e) { return function (t) { var r = e.getParent(t); return r != null && e.isTag(r) && u(t); }; }
var Iu = { contains: function (u, e, _a) {
        var t = _a.adapter;
        return function (a) { return u(a) && t.getText(a).includes(e); };
    }, icontains: function (u, e, _a) {
        var t = _a.adapter;
        var r = e.toLowerCase();
        return function (i) { return u(i) && t.getText(i).toLowerCase().includes(r); };
    }, "nth-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Lu(e);
        return a === z.default.falseFunc ? z.default.falseFunc : a === z.default.trueFunc ? he(u, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = 0; o < s.length && !r(n, s[o]); o++)
            t.isTag(s[o]) && c++; return a(c) && u(n); };
    }, "nth-last-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Lu(e);
        return a === z.default.falseFunc ? z.default.falseFunc : a === z.default.trueFunc ? he(u, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = s.length - 1; o >= 0 && !r(n, s[o]); o--)
            t.isTag(s[o]) && c++; return a(c) && u(n); };
    }, "nth-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Lu(e);
        return a === z.default.falseFunc ? z.default.falseFunc : a === z.default.trueFunc ? he(u, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = 0; o < s.length; o++) {
            var d = s[o];
            if (r(n, d))
                break;
            t.isTag(d) && t.getName(d) === t.getName(n) && c++;
        } return a(c) && u(n); };
    }, "nth-last-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Lu(e);
        return a === z.default.falseFunc ? z.default.falseFunc : a === z.default.trueFunc ? he(u, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = s.length - 1; o >= 0; o--) {
            var d = s[o];
            if (r(n, d))
                break;
            t.isTag(d) && t.getName(d) === t.getName(n) && c++;
        } return a(c) && u(n); };
    }, root: function (u, e, _a) {
        var t = _a.adapter;
        return function (r) { var a = t.getParent(r); return (a == null || !t.isTag(a)) && u(r); };
    }, scope: function (u, e, t, r) { var a = t.equals; return !r || r.length === 0 ? Iu.root(u, e, t) : r.length === 1 ? function (i) { return a(r[0], i) && u(i); } : function (i) { return r.includes(i) && u(i); }; }, hover: ot("isHovered"), visited: ot("isVisited"), active: ot("isActive") };
function ot(u) { return function (t, r, _a) {
    var a = _a.adapter;
    var i = a[u];
    return typeof i != "function" ? z.default.falseFunc : function (s) { return i(s) && t(s); };
}; }
var Qu = { empty: function (u, _a) {
        var e = _a.adapter;
        return !e.getChildren(u).some(function (t) { return e.isTag(t) || e.getText(t) !== ""; });
    }, "first-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(u) == null;
        var r = e.getSiblings(u).find(function (a) { return e.isTag(a); });
        return r != null && t(u, r);
    }, "last-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u);
        for (var a = r.length - 1; a >= 0; a--) {
            if (t(u, r[a]))
                return !0;
            if (e.isTag(r[a]))
                break;
        }
        return !1;
    }, "first-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), a = e.getName(u);
        for (var i = 0; i < r.length; i++) {
            var n = r[i];
            if (t(u, n))
                return !0;
            if (e.isTag(n) && e.getName(n) === a)
                break;
        }
        return !1;
    }, "last-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), a = e.getName(u);
        for (var i = r.length - 1; i >= 0; i--) {
            var n = r[i];
            if (t(u, n))
                return !0;
            if (e.isTag(n) && e.getName(n) === a)
                break;
        }
        return !1;
    }, "only-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getName(u);
        return e.getSiblings(u).every(function (a) { return t(u, a) || !e.isTag(a) || e.getName(a) !== r; });
    }, "only-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        return e.getSiblings(u).every(function (r) { return t(u, r) || !e.isTag(r); });
    } };
function lt(u, e, t, r) { if (t === null) {
    if (u.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (u.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var be = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var X = bu(fu(), 1);
var ht = {};
function bt(u, e) { return u === X.default.falseFunc ? X.default.falseFunc : function (t) { return e.isTag(t) && u(t); }; }
function pt(u, e) { var t = e.getSiblings(u); if (t.length <= 1)
    return []; var r = t.indexOf(u); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(e.isTag); }
function dt(u) { return { xmlMode: !!u.xmlMode, lowerCaseAttributeNames: !!u.lowerCaseAttributeNames, lowerCaseTags: !!u.lowerCaseTags, quirksMode: !!u.quirksMode, cacheResults: !!u.cacheResults, pseudos: u.pseudos, adapter: u.adapter, equals: u.equals }; }
var ft = function (u, e, t, r, a) { var i = a(e, dt(t), r); return i === X.default.trueFunc ? u : i === X.default.falseFunc ? X.default.falseFunc : function (n) { return i(n) && u(n); }; }, pe = { is: ft, matches: ft, where: ft, not: function (u, e, t, r, a) { var i = a(e, dt(t), r); return i === X.default.falseFunc ? u : i === X.default.trueFunc ? X.default.falseFunc : function (n) { return !i(n) && u(n); }; }, has: function (u, e, t, r, a) { var i = t.adapter, n = dt(t); n.relativeSelector = !0; var s = e.some(function (d) { return d.some($u); }) ? [ht] : void 0, c = a(e, n, s); if (c === X.default.falseFunc)
        return X.default.falseFunc; var o = bt(c, i); if (s && c !== X.default.trueFunc) {
        var _a = c.shouldTestNextSiblings, d_1 = _a === void 0 ? !1 : _a;
        return function (y) { if (!u(y))
            return !1; s[0] = y; var h = i.getChildren(y), b = d_1 ? __spreadArray(__spreadArray([], __read(h), false), __read(pt(y, i)), false) : h; return i.existsOne(o, b); };
    } return function (d) { return u(d) && i.existsOne(o, i.getChildren(d)); }; } };
function v0(u, e, t, r, a) { var i; var n = e.name, s = e.data; if (Array.isArray(s)) {
    if (!(n in pe))
        throw new Error("Unknown pseudo-class :".concat(n, "(").concat(s, ")"));
    return pe[n](u, s, t, r, a);
} var c = (i = t.pseudos) === null || i === void 0 ? void 0 : i[n], o = typeof c == "string" ? c : be[n]; if (typeof o == "string") {
    if (s != null)
        throw new Error("Pseudo ".concat(n, " doesn't have any arguments"));
    var d = lu(o);
    return pe.is(u, d, t, r, a);
} if (typeof c == "function")
    return lt(c, n, s, 1), function (d) { return c(d, s) && u(d); }; if (n in Iu)
    return Iu[n](u, s, t, r); if (n in Qu) {
    var d_2 = Qu[n];
    return lt(d_2, n, s, 2), function (y) { return d_2(y, t, s) && u(y); };
} throw new Error("Unknown pseudo-class :".concat(n)); }
function gt(u, e) { var t = e.getParent(u); return t && e.isTag(t) ? t : null; }
function E0(u, e, t, r, a) { var i = t.adapter, n = t.equals; switch (e.type) {
    case p.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case p.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case p.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), y0[e.action](u, e, t);
    }
    case p.Pseudo: return v0(u, e, t, r, a);
    case p.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var s_1 = e.name;
        return (!t.xmlMode || t.lowerCaseTags) && (s_1 = s_1.toLowerCase()), function (o) { return i.getName(o) === s_1 && u(o); };
    }
    case p.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (o) { var d = o; for (; d = gt(d, i);)
                if (u(d))
                    return !0; return !1; };
        var s_2 = new WeakSet;
        return function (o) { var d = o; for (; d = gt(d, i);)
            if (!s_2.has(d)) {
                if (i.isTag(d) && u(d))
                    return !0;
                s_2.add(d);
            } return !1; };
    }
    case "_flexibleDescendant": return function (c) { var o = c; do
        if (u(o))
            return !0;
    while (o = gt(o, i)); return !1; };
    case p.Parent: return function (c) { return i.getChildren(c).some(function (o) { return i.isTag(o) && u(o); }); };
    case p.Child: return function (c) { var o = i.getParent(c); return o != null && i.isTag(o) && u(o); };
    case p.Sibling: return function (c) { var o = i.getSiblings(c); for (var d = 0; d < o.length; d++) {
        var y = o[d];
        if (n(c, y))
            break;
        if (i.isTag(y) && u(y))
            return !0;
    } return !1; };
    case p.Adjacent: return i.prevElementSibling ? function (c) { var o = i.prevElementSibling(c); return o != null && u(o); } : function (c) { var o = i.getSiblings(c), d; for (var y = 0; y < o.length; y++) {
        var h = o[y];
        if (n(c, h))
            break;
        i.isTag(h) && (d = h);
    } return !!d && u(d); };
    case p.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return u;
    }
} }
function T0(u, e, t) { var r = ge(u, e, t); return bt(r, e.adapter); }
function ge(u, e, t) { var r = typeof u == "string" ? lu(u) : u; return me(r, e, t); }
function N0(u) { return u.type === p.Pseudo && (u.name === "scope" || Array.isArray(u.data) && u.data.some(function (e) { return e.some(N0); })); }
var sa = { type: p.Descendant }, ca = { type: "_flexibleDescendant" }, oa = { type: p.Pseudo, name: "scope", data: null };
function la(u, _a, t) {
    var e_6, _b;
    var e = _a.adapter;
    var r = !!(t != null && t.every(function (a) { var i = e.isTag(a) && e.getParent(a); return a === ht || i && e.isTag(i); }));
    try {
        for (var u_1 = __values(u), u_1_1 = u_1.next(); !u_1_1.done; u_1_1 = u_1.next()) {
            var a = u_1_1.value;
            if (!(a.length > 0 && $u(a[0]) && a[0].type !== p.Descendant))
                if (r && !a.some(N0))
                    a.unshift(sa);
                else
                    continue;
            a.unshift(oa);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (u_1_1 && !u_1_1.done && (_b = u_1.return)) _b.call(u_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function me(u, e, t) { var r; u.forEach(st), t = (r = e.context) !== null && r !== void 0 ? r : t; var a = Array.isArray(t), i = t && (Array.isArray(t) ? t : [t]); if (e.relativeSelector !== !1)
    la(u, e, i);
else if (u.some(function (c) { return c.length > 0 && $u(c[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var n = !1, s = u.map(function (c) { if (c.length >= 2) {
    var _a = __read(c, 2), o = _a[0], d = _a[1];
    o.type !== p.Pseudo || o.name !== "scope" || (a && d.type === p.Descendant ? c[1] = ca : (d.type === p.Adjacent || d.type === p.Sibling) && (n = !0));
} return fa(c, e, i); }).reduce(da, au.default.falseFunc); return s.shouldTestNextSiblings = n, s; }
function fa(u, e, t) { var r; return u.reduce(function (a, i) { return a === au.default.falseFunc ? au.default.falseFunc : E0(a, i, e, t, me); }, (r = e.rootFunc) !== null && r !== void 0 ? r : au.default.trueFunc); }
function da(u, e) { return e === au.default.falseFunc || u === au.default.trueFunc ? u : u === au.default.falseFunc || e === au.default.trueFunc ? e : function (r) { return u(r) || e(r); }; }
var C0 = function (u, e) { return u === e; }, ha = { adapter: uu, equals: C0 };
function q0(u) { var e, t, r, a; var i = u != null ? u : ha; return (e = i.adapter) !== null && e !== void 0 || (i.adapter = uu), (t = i.equals) !== null && t !== void 0 || (i.equals = (a = (r = i.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : C0), i; }
function xt(u) { return function (t, r, a) { var i = q0(r); return u(t, i, a); }; }
var Bn = xt(T0), Hn = xt(ge), xe = xt(me);
function k0(u) { return function (t, r, a) { var i = q0(a); typeof t != "function" && (t = ge(t, i, r)); var n = ye(r, i.adapter, t.shouldTestNextSiblings); return u(t, n, i); }; }
function ye(u, e, t) {
    if (t === void 0) { t = !1; }
    return t && (u = ba(u, e)), Array.isArray(u) ? e.removeSubsets(u) : e.getChildren(u);
}
function ba(u, e) { var t = Array.isArray(u) ? u.slice(0) : [u], r = t.length; for (var a = 0; a < r; a++) {
    var i = pt(t[a], e);
    t.push.apply(t, __spreadArray([], __read(i), false));
} return t; }
var Pn = k0(function (u, e, t) { return u === mt.default.falseFunc || !e || e.length === 0 ? [] : t.adapter.findAll(u, e); }), Gn = k0(function (u, e, t) { return u === mt.default.falseFunc || !e || e.length === 0 ? null : t.adapter.findOne(u, e); });
var we = bu(fu(), 1);
var pa = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Du(u) { return u.type !== "pseudo" ? !1 : pa.has(u.name) ? !0 : u.name === "not" && Array.isArray(u.data) ? u.data.some(function (e) { return e.some(Du); }) : !1; }
function L0(u, e, t) { var r = e != null ? parseInt(e, 10) : NaN; switch (u) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, t) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * t;
    case "even": return 2 * t - 1;
    case "last":
    case "not": return 1 / 0;
} }
function I0(u) { for (; u.parent;)
    u = u.parent; return u; }
function Se(u) {
    var e_7, _a;
    var e = [], t = [];
    try {
        for (var u_2 = __values(u), u_2_1 = u_2.next(); !u_2_1.done; u_2_1 = u_2.next()) {
            var r = u_2_1.value;
            r.some(Du) ? e.push(r) : t.push(r);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (u_2_1 && !u_2_1.done && (_a = u_2.return)) _a.call(u_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [t, e];
}
var ga = { type: p.Universal, namespace: null }, ma = { type: p.Pseudo, name: "scope", data: null };
function wt(u, e, t) {
    if (t === void 0) { t = {}; }
    return xa([u], e, t);
}
function xa(u, e, t) {
    if (t === void 0) { t = {}; }
    if (typeof e == "function")
        return u.some(e);
    var _a = __read(Se(lu(e)), 2), r = _a[0], a = _a[1];
    return r.length > 0 && u.some(xe(r, t)) || a.some(function (i) { return D0(i, u, t).length > 0; });
}
function ya(u, e, t, r) { var a = typeof t == "string" ? parseInt(t, 10) : NaN; switch (u) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < e.length ? [a < 0 ? e[e.length + a] : e[a]] : [];
    case "gt": return isFinite(a) ? e.slice(a + 1) : [];
    case "even": return e.filter(function (i, n) { return n % 2 === 0; });
    case "odd": return e.filter(function (i, n) { return n % 2 === 1; });
    case "not": {
        var i_1 = new Set(Sa(t, e, r));
        return e.filter(function (n) { return !i_1.has(n); });
    }
} }
function Sa(u, e, t) { if (e.length === 0)
    return []; var _a = __read(Se(u), 2), r = _a[0], a = _a[1], i; if (r.length) {
    var n = St(e, r, t);
    if (a.length === 0)
        return n;
    n.length && (i = new Set(n));
} for (var n = 0; n < a.length && (i == null ? void 0 : i.size) !== e.length; n++) {
    var s = a[n];
    if ((i ? e.filter(function (d) { return C(d) && !i.has(d); }) : e).length === 0)
        break;
    var o = D0(s, e, t);
    if (o.length)
        if (i)
            o.forEach(function (d) { return i.add(d); });
        else {
            if (n === a.length - 1)
                return o;
            i = new Set(o);
        }
} return typeof i != "undefined" ? i.size === e.length ? e : e.filter(function (n) { return i.has(n); }) : []; }
function D0(u, e, t) { var r; if (u.some(gu)) {
    var a = (r = t.root) !== null && r !== void 0 ? r : I0(e[0]), i = hu(J({}, t), { context: e, relativeSelector: !1 });
    return u.push(ma), Ae(a, u, i, !0, e.length);
} return Ae(e, u, t, !1, e.length); }
function At(u, e, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof u == "function")
        return U0(e, u);
    var _a = __read(Se(lu(u)), 2), a = _a[0], i = _a[1], n = i.map(function (s) { return Ae(e, s, t, !0, r); });
    return a.length && n.push(yt(e, a, t, r)), n.length === 0 ? [] : n.length === 1 ? n[0] : at(n.reduce(function (s, c) { return __spreadArray(__spreadArray([], __read(s), false), __read(c), false); }));
}
function Ae(u, e, t, r, a) { var i = e.findIndex(Du), n = e.slice(0, i), s = e[i], c = e.length - 1 === i ? a : 1 / 0, o = L0(s.name, s.data, c); if (o === 0)
    return []; var y = (n.length === 0 && !Array.isArray(u) ? se(u).filter(C) : n.length === 0 ? (Array.isArray(u) ? u : [u]).filter(C) : r || n.some(gu) ? yt(u, [n], t, o) : St(u, [n], t)).slice(0, o), h = ya(s.name, y, s.data, t); if (h.length === 0 || e.length === i + 1)
    return h; var b = e.slice(i + 1), S = b.some(gu); if (S) {
    if (gu(b[0])) {
        var w = b[0].type;
        (w === p.Sibling || w === p.Adjacent) && (h = ye(h, uu, !0)), b.unshift(ga);
    }
    t = hu(J({}, t), { relativeSelector: !1, rootFunc: function (w) { return h.includes(w); } });
}
else
    t.rootFunc && t.rootFunc !== we.trueFunc && (t = hu(J({}, t), { rootFunc: we.trueFunc })); return b.some(Du) ? Ae(h, b, t, !1, a) : S ? yt(h, [b], t, a) : St(h, [b], t); }
function yt(u, e, t, r) { var a = xe(e, t, u); return U0(u, a, r); }
function U0(u, e, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = ye(u, uu, e.shouldTestNextSiblings);
    return oe(function (a) { return C(a) && e(a); }, r, !0, t);
}
function St(u, e, t) { var r = (Array.isArray(u) ? u : [u]).filter(C); if (r.length === 0)
    return r; var a = xe(e, t); return a === we.trueFunc ? r : r.filter(a); }
function O0(u) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(u) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function vt(u) { var e = [], t = u.split("/"); for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a === ".." ? (e.length > 1 && e.pop(), r === t.length - 1 && e.push("")) : a === "." ? r === t.length - 1 && e.push("") : e.push(a);
} return e.join("/"); }
function Ee(u, e) { e = e == null ? "" : String(e).trim(); var t = O0(e); if (t.scheme || !u)
    return e; var r = O0(String(u)); if (!r.scheme)
    return e; var a = r.auth, i, n; if (t.auth !== void 0)
    a = t.auth, i = vt(t.path), n = t.query;
else if (!t.path)
    i = r.path, n = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        i = vt(t.path);
    else {
        var s = a !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        i = vt(s + t.path);
    }
    n = t.query;
} return a !== void 0 && i.charAt(0) !== "/" && (i = "/" + i), r.scheme + ":" + (a !== void 0 ? "//" + a : "") + i + (n !== void 0 ? "?" + n : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function M0(u) { if (typeof btoa == "function")
    return btoa(u); var e = ""; for (var t = 0; t < u.length; t += 3) {
    var r = u.charCodeAt(t), a = u.charCodeAt(t + 1), i = u.charCodeAt(t + 2), n = r << 16 | (a || 0) << 8 | (i || 0);
    e += ve[n >> 18 & 63] + ve[n >> 12 & 63] + (t + 1 < u.length ? ve[n >> 6 & 63] : "=") + (t + 2 < u.length ? ve[n & 63] : "=");
} return e; }
var wa = function (u, e, t) { return At(u, e, t); }, H0 = function (u, e, t) { return At(u, e, t, 1)[0] || null; }, P0 = /[\s ]+/g, R0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), Aa = { containsOwn: function (u, e) { return Tt(u).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (u, e) { return F0(e).test(Et(u)); }, matchesOwn: function (u, e) { return F0(e).test(Tt(u)); }, containsData: function (u, e) { return cu(u).includes(e); }, "contains-ci": function (u, e) { return Et(u).toLowerCase().includes(String(e).toLowerCase()); } };
function F0(u) { try {
    return new RegExp(u);
}
catch (e) {
    return /$^/;
} }
var Te = { pseudos: Aa, xmlMode: !1, lowerCaseTags: !0 };
function Ne(u) { return String(u).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Et(u) { if (!u)
    return ""; if (u.type === "text")
    return u.data; var e = "", t = function (r) {
    var e_8, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.type === "text" ? e += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? e += " " : a.type === "tag" && (R0.has(a.name) && (e += " "), t(a), R0.has(a.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return t(u), e.replace(P0, " ").trim(); }
function Tt(u) {
    var e_9, _a;
    var e = "";
    try {
        for (var _b = __values(u.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            t.type === "text" && (e += t.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(P0, " ").trim();
}
function G0(u, e) { if (!e)
    return ""; try {
    return Ee(u, e);
}
catch (t) {
    return u ? "" : e;
} }
var xu = (function () {
    function u(e, t) {
        this.node = e, this.doc = t;
    }
    Object.defineProperty(u.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    u.prototype.select = function (e) { return eu.of(wa(Ne(e), this.node, Te), this.doc); };
    u.prototype.selectFirst = function (e) { var t = H0(Ne(e), this.node, Te); return t ? new u(t, this.doc) : null; };
    u.prototype.is = function (e) { return wt(this.node, Ne(e), Te); };
    u.prototype.text = function () { return Et(this.node); };
    u.prototype.ownText = function () { return Tt(this.node); };
    u.prototype.wholeText = function () { return cu(this.node); };
    u.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    u.prototype.html = function () { return (this.node.children || []).map(function (e) { return qu(e, { decodeEntities: !1 }); }).join("").trim(); };
    u.prototype.outerHtml = function () { return qu(this.node, { decodeEntities: !1 }); };
    u.prototype.toString = function () { return this.outerHtml(); };
    u.prototype.tagName = function () { return this.node.name || ""; };
    u.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    u.prototype.id = function () { return this.attr("id"); };
    u.prototype.className = function () { return this.attr("class"); };
    u.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    u.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    u.prototype.attr = function (e, t) { if (t !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(t)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return G0(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
    u.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    u.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    u.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    u.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    u.prototype.dataset = function () {
        var e_10, _a;
        var e = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), t = _d[0], r = _d[1];
                t.startsWith("data-") && (e[t.slice(5)] = r);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    u.prototype.val = function () { return this.attr("value"); };
    u.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new u(e, this.doc) : null; };
    u.prototype.parents = function () { var e = [], t = this.node.parent; for (; t && t.type !== "root";)
        e.push(t), t = t.parent; return eu.of(e, this.doc); };
    u.prototype.closest = function (e) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && wt(t, Ne(e), Te))
            return new u(t, this.doc);
        t = t.parent;
    } return null; };
    u.prototype.children = function () { return eu.of((this.node.children || []).filter(C), this.doc); };
    u.prototype.child = function (e) { var t = (this.node.children || []).filter(C)[e]; return t ? new u(t, this.doc) : null; };
    u.prototype.childrenSize = function () { return (this.node.children || []).filter(C).length; };
    u.prototype.nextElementSibling = function () { var e = ut(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.previousElementSibling = function () { var e = et(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.siblingElements = function () {
        var _this = this;
        return eu.of(ce(this.node).filter(function (e) { return e !== _this.node && C(e); }), this.doc);
    };
    u.prototype.elementSiblingIndex = function () { return ce(this.node).filter(C).indexOf(this.node); };
    u.prototype.getElementsByTag = function (e) { return this.select(e); };
    u.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    u.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    u.prototype.remove = function () { return ru(this.node), this; };
    u.prototype.empty = function () { return this.node.children = [], this; };
    u.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    u.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    u.prototype.body = function () { return this.selectFirst("body") || this; };
    u.prototype.head = function () { return this.selectFirst("head") || this; };
    u.prototype.location = function () { return this.baseUri; };
    return u;
}()), Ct = Object.create(Array.prototype), eu = { of: Nt, prototype: Ct };
function Nt(u, e) {
    var e_11, _a;
    var t = [];
    try {
        for (var _b = __values(u || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof xu ? r : new xu(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(t, Ct), t;
}
var B0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (u) { return this[u] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (u) { return eu.of(this[u] ? [this[u]] : [], null); }, text: function () { return this.map(function (u) { return u.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (u) { return u.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (u) { return u.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (u) { return u.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (u, e) {
        var e_12, _a;
        if (e !== void 0)
            return this.forEach(function (t) { return t.attr(u, e); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                if (t.hasAttr(u))
                    return t.attr(u);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (u) { return this.filter(function (e) { return e.hasAttr(u); }).map(function (e) { return e.attr(u); }); }, hasAttr: function (u) { return this.some(function (e) { return e.hasAttr(u); }); }, hasClass: function (u) { return this.some(function (e) { return e.hasClass(u); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (u) {
        var e_13, _a, e_14, _b;
        var e = Nt([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_14 = void 0, __values(r.select(u))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var a = _g.value;
                        t.has(a.node) || (t.add(a.node), e.push(a));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (u) {
        var e_15, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                var t = e.selectFirst(u);
                if (t)
                    return t;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (u) { return this.some(function (e) { return e.is(u); }); }, not: function (u) { return eu.of(this.filter(function (e) { return !e.is(u); }), null); }, parents: function () {
        var e_16, _a;
        var u = Nt([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                u.push.apply(u, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return u;
    }, next: function () { return eu.of(this.map(function (u) { return u.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return eu.of(this.map(function (u) { return u.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (u) { return u.remove(); }), this; }, empty: function () { return this.forEach(function (u) { return u.empty(); }), this; }, removeAttr: function (u) { return this.forEach(function (e) { return e.removeAttr(u); }), this; } };
try {
    for (var _b = __values(Object.keys(B0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var u = _c.value;
        Object.defineProperty(Ct, u, { value: B0[u], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Ce(u, e) { var t = f0(String(u == null ? "" : u), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new xu(t, null); r.doc = r, r.__base = e || ""; var a = H0("base[href]", t); return a && a.attribs.href && (r.__base = G0(r.__base, a.attribs.href)), r; }
function V0(u, e) { var t = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Ce(u), a = function (i) {
    var e_17, _a, e_18, _b;
    try {
        for (var _c = __values((i.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            if (n.type === "script" || n.type === "style" || n.type === "comment") {
                ru(n);
                continue;
            }
            if (n.type === "tag" && (a(n), !t.has(n.name))) {
                var s = (n.children || []).slice();
                try {
                    for (var s_3 = (e_18 = void 0, __values(s)), s_3_1 = s_3.next(); !s_3_1.done; s_3_1 = s_3.next()) {
                        var c = s_3_1.value;
                        tt(n, c);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (s_3_1 && !s_3_1.done && (_b = s_3.return)) _b.call(s_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                ru(n);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return a(r.node), qu(r.node.children, { decodeEntities: !1 }); }
var Xu = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function va(u) { if (typeof Buffer != "undefined")
    return Buffer.from(u).toString("base64"); var e = ""; for (var t = 0; t < u.length; t++)
    e += String.fromCharCode(u[t]); return M0(e); }
function j0(u) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(u) : Uint8Array.from(unescape(encodeURIComponent(u)), function (e) { return e.charCodeAt(0); }); }
function Ea(u) { var e = ""; for (var t = 0; t < u.length; t++) {
    var r = u.charCodeAt(t);
    if (r < 128) {
        e += u[t];
        continue;
    }
    if (r === 128) {
        e += "€";
        continue;
    }
    var a = u.charCodeAt(t + 1);
    r >= 129 && r <= 254 && a >= 64 && a <= 254 && a !== 127 ? (e += __GBK_TABLE[(r - 129) * 190 + (a - 64) - (a > 127 ? 1 : 0)], t++) : e += "�";
} return e; }
var qt = (function () {
    function qt(e, t) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || t.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: t.url, headers: t.headers || {} };
    }
    qt.prototype.header = function (e) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return t ? this.headers[t] : ""; };
    qt.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? Ea(t) : t; };
    qt.prototype.string = function (e) { return this.text(e); };
    qt.prototype.html = function (e) { return Ce(this.text(e), this.url); };
    qt.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    qt.prototype.base64 = function () { return va(this._raw.bytes || j0(this.text())); };
    qt.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || j0(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return qt;
}());
function Ta(u) {
    var e_19, _a;
    var e = {};
    if (!u)
        return e;
    if (typeof u.forEach == "function" && !Array.isArray(u) && typeof u.entries == "function")
        return u.forEach(function (t, r) { e[r] = t; }), e;
    try {
        for (var _b = __values(Object.keys(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            e[t] = String(u[t]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function W0(u, e) { var t = function (n) { return ({ getItem: function (s) { var c = u.storageGet(n + s); return c == null ? null : c; }, setItem: function (s, c) { return u.storageSet(n + s, c == null ? null : String(c)); }, removeItem: function (s) { return u.storageSet(n + s, null); }, clear: function () { return u.storageClear && u.storageClear(n); } }); }, r = "__cookie__", a = {}; a.Response = { success: function (n, s) { return ({ code: 0, data: n === void 0 ? null : n, data2: s === void 0 ? null : s }); }, error: function (n) { return ({ code: 1, data: n == null ? "" : String(n) }); } }, a.fetch = function (s, c) {
    return __awaiter(this, void 0, void 0, function () { var o, w, d, y, h, w, b, S, w_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                c = c || {};
                o = String(s);
                if (c.queries) {
                    w = Object.entries(c.queries).map(function (_a) {
                        var _b = __read(_a, 2), R = _b[0], P = _b[1];
                        return encodeURIComponent(R) + "=" + encodeURIComponent(P);
                    }).join("&");
                    w && (o += (o.includes("?") ? "&" : "?") + w);
                }
                d = Object.assign({ "User-Agent": Xu }, Ta(c.headers)), y = u.storageGet(r);
                y && !Object.keys(d).some(function (w) { return w.toLowerCase() === "cookie"; }) && (d.Cookie = y);
                h = c.body;
                if (h != null && typeof h == "object") {
                    w = Object.keys(d).find(function (R) { return R.toLowerCase() === "content-type"; });
                    w && /json/i.test(d[w]) ? h = JSON.stringify(h) : (h = Object.entries(h).map(function (_a) {
                        var _b = __read(_a, 2), R = _b[0], P = _b[1];
                        return encodeURIComponent(R) + "=" + encodeURIComponent(P);
                    }).join("&"), w || (d["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                b = { url: o, method: (c.method || (h != null ? "POST" : "GET")).toUpperCase(), headers: d, body: h, timeout: c.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, u.request(b)];
            case 2:
                S = _a.sent();
                return [3, 4];
            case 3:
                w_1 = _a.sent();
                S = { status: 0, url: o, headers: {}, text: "", error: String(w_1 && w_1.message || w_1) };
                return [3, 4];
            case 4: return [2, new qt(S, b)];
        }
    }); });
}, a.Http = { get: function (n) { return z0(a, "GET", n); }, post: function (n) { return z0(a, "POST", n); } }, a.Html = { parse: function (n, s) { return Ce(n, s || ""); }, clean: function (n, s) { return V0(n, s); } }, a.localStorage = t("ls:"), a.cacheStorage = t("cs:"), a.resumeStorage = { get: function (n) { try {
        var s = u.storageGet("resume:" + n);
        return s && parseFloat(s) || 0;
    }
    catch (c) {
        return 0;
    } }, set: function (n, s) { try {
        u.storageSet("resume:" + n, String(Math.max(0, s || 0)));
    }
    catch (c) { } } }, a.localConfig = { getItem: function (n) { return u.config(n); } }, a.localCookie = { setCookie: function (n) { u.storageSet(r, String(n).split(";")[0]); }, getCookie: function () { return u.storageGet(r) || ""; } }, a.sleep = function (n) { return new Promise(function (s) { return typeof setTimeout == "function" ? setTimeout(s, Math.min(Number(n) || 0, 1e4)) : s(); }); }; var i = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    try {
        u.log && u.log(n.map(function (s) { return typeof s == "string" ? s : JSON.stringify(s); }).join(" "));
    }
    catch (s) { }
}; return a.Log = { log: i }, a.console = { log: i, error: i, warn: i, info: i }, a.Console = a.console, a.log = i, a.UserAgent = { system: function () { return Xu; }, chrome: function () { return Xu; }, android: function () { return Xu; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, a.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (u.name || "host") + ")"); } }, a.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, a.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, a.Elements = eu, a.Element = xu, a.__meta = e, a; }
function z0(u, e, t) { var r = { method: e, url: t, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (i) { return Object.assign(r.headers, i || {}), a; }, header: function (i, n) { return r.headers[i] = n, a; }, params: function (i) { return r.queries = i, a; }, queries: function (i) { return r.queries = i, a; }, body: function (i) { return r.body = i, a; }, html: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(i)];
            }
        }); });
    }, string: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, text: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return a; }
function yu(u, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(u, e); try {
    return Ee(u, e);
}
catch (t) {
    return e;
} }
var L = function (u) { return u == null ? "" : String(u); }, Na = function (u) { return u.filter(function (e, t) { return e && u.indexOf(e) === t; }); }, qe = (function () {
    function class_1(e) {
        var t = e.meta, r = e.scripts, a = e.host;
        this.meta = t, this.host = a, this.env = e.env || W0(a, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return L(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, a, i, n;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[e];
                        if (!r)
                            throw new Error("script " + e + " missing");
                        a = function (s) { var c = _this.host.config(s); return c == null ? (_this.meta.configDefaults || {})[s] : c; };
                        return [4, r(this.env, a)];
                    case 1:
                        i = _a.sent();
                        if (typeof i != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, i.apply(void 0, __spreadArray([], __read(t.map(L)), false))];
                    case 2:
                        n = _a.sent();
                        if (!n)
                            throw new Error(e + ": empty result");
                        if (n.code !== 0)
                            throw new Error(e + ": " + L(n.data || "error"));
                        return [2, n];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return L(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _a, t_1, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (e = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    t_1 = _b.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var a, i, n, s, c;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = e + "|" + t;
                        r = Math.max(1, r | 0);
                        i = r === 1 ? "" : this.tokens[a + "|" + r];
                        if (r > 1 && i == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, t, i)];
                    case 1:
                        n = _a.sent(), s = L(n.data2);
                        s && (this.tokens[a + "|" + (r + 1)] = s);
                        c = (n.data || []).filter(Boolean).map(function (o) { return ({ name: L(o.name).trim(), link: yu(o.host || _this.base + "/", o.link), cover: yu(o.host || _this.base + "/", o.cover), description: L(o.description), tag: L(o.tag) }); }).filter(function (o) { return o.name && o.link; });
                        return [2, { items: c, hasNext: !!s && c.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), L(t[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), L(r.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", e, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("detail", e)];
                case 1:
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (a) { return typeof a == "string" ? a : a && a.title; }).filter(Boolean);
                    return [2, { name: L(t.name).trim(), cover: yu(t.host || this.base + "/", t.cover), author: L(t.author).trim(), description: $0(L(t.description)), detail: $0(L(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: Na(r.map(function (a) { return String(a).trim(); })), url: e, format: L(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, a, _a, _b, e_20_1, _c;
            var e_20, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        r = (_f.sent()).data || [e];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        a = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", L(a))];
                    case 4:
                        t = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _f.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _c = (t = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: L(r.name).trim() || "#" + (a + 1), url: yu(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b, r, a;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _a = t = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _b = t = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = t = [e];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6:
                        _a, typeof t == "string" && (t = t.split(/[\n,]+/));
                        r = function (i) { return !i || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(i)); }, a = function (i) { if (typeof i == "string")
                            return i; if (!i)
                            return ""; var n = i.link || i.url || i.data, s = Array.isArray(i.fallback) ? i.fallback.filter(Boolean) : []; return r(n) && s.length ? s[0] : n; };
                        return [2, (t || []).map(function (i) { return yu(_this.base + "/", a(i)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("chap", e)];
                case 1:
                    t = _a.sent();
                    return [2, { html: L(t.data), title: L(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, i, r, a, t_3, t_3_1, i, n, s, s_4, s_4_1, c, o, d, y, n_2, e_21_1;
            var e_21, _a, e_22, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        i = (_c.sent()).data;
                        Array.isArray(i) && i.length && (t = i.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: L(n.title || n.name || "Server"), data: L(n.data || n.url || n.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = this.env && this.env.resumeStorage ? this.env.resumeStorage.get(e) : 0, a = [];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, 11, 12]);
                        t_3 = __values(t), t_3_1 = t_3.next();
                        _c.label = 4;
                    case 4:
                        if (!!t_3_1.done) return [3, 9];
                        i = t_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", i.data)];
                    case 6:
                        n = (_c.sent()).data || {}, s = Array.isArray(n) ? n : [n];
                        try {
                            for (s_4 = (e_22 = void 0, __values(s)), s_4_1 = s_4.next(); !s_4_1.done; s_4_1 = s_4.next()) {
                                c = s_4_1.value;
                                if (!c || !c.data || c.type === "webview")
                                    continue;
                                o = yu(c.host || this.base + "/", c.data), d = r > 0 && !c.data.includes("#t=") && !c.data.includes("&t=") ? (c.data.includes("#") ? "&" : "#") + "t=" + Math.floor(r) : "", y = r > 0 ? " [Tiếp tục " + Math.floor(r / 60) + ":" + ("0" + Math.floor(r % 60)).slice(-2) + "]" : "";
                                a.push({ url: o + d, rawUrl: o, resumeSec: r, quality: i.title + (c.quality ? " " + c.quality : "") + y, headers: c.headers || { Referer: this.base + "/" }, subtitles: (c.subtitles || (c.subtitle ? [{ data: c.subtitle, label: "Sub" }] : [])).map(function (h) { return ({ file: yu(_this.base + "/", h.data || h.file), label: L(h.label || h.language || "Sub") }); }), mimeType: L(c.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (s_4_1 && !s_4_1.done && (_b = s_4.return)) _b.call(s_4);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        n_2 = _c.sent();
                        this.host.log && this.host.log("track " + i.title + ": " + n_2.message);
                        return [3, 8];
                    case 8:
                        t_3_1 = t_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _c.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_a = t_3.return)) _a.call(t_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, a];
                }
            });
        });
    };
    return class_1;
}());
function $0(u) {
    return String(u).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var iu = { id: "truyenmoi", name: "Truyện Mới", source: "https://truyenmoiqq.com/", type: "novel", locale: "vi", nsfw: !1, version: 7, config: {}, configDefaults: {}, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.truyenmoi", lnIcon: "", lnVersion: "1.3.7" }, K0 = { home: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = {});
                                                    g = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (l.headers)
                                                        for (m in l.headers)
                                                            g[m] = l.headers[m];
                                                    l.headers = g;
                                                    return [4, t(A, l)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2, i.success([{ title: "Truyện Hot", input: E + "/danh-sach/truyen-hot", script: "gen.js" }, { title: "Truyện Full", input: E + "/danh-sach/truyen-full", script: "gen.js" }, { title: "Truyện Mới", input: E + "/danh-sach/truyen-moi", script: "gen.js" }])];
                                        }); });
                                    } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (A) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, genre: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = {});
                                                    g = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (l.headers)
                                                        for (m in l.headers)
                                                            g[m] = l.headers[m];
                                                    l.headers = g;
                                                    return [4, t(A, l)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T() {
                                        return __awaiter(this, void 0, void 0, function () { var A, l, g; return __generator(this, function (_a) {
                                            for (A = [], l = [{ title: "Tổng Tài", input: "tong-tai" }, { title: "Kỳ Ảo", input: "ky-ao" }, { title: "Cạnh Kỹ", input: "canh-ky" }, { title: "Huyền Nghi", input: "huyen-nghi" }, { title: "Dã Sử", input: "da-su" }, { title: "FanFic", input: "fanfic" }, { title: "Đồng Nhân", input: "dong-nhan" }, { title: "Truyện Audio", input: "truyen-audio" }, { title: "Thám Hiểm", input: "tham-hiem" }, { title: "Quan Trường", input: "quan-truong" }, { title: "Bách Hợp", input: "bach-hop" }, { title: "Quân Sự", input: "quan-su" }, { title: "Phương Tây", input: "phuong-tay" }, { title: "Việt Nam", input: "viet-nam" }, { title: "Đoản Văn", input: "doan-van" }, { title: "Cung Đấu", input: "cung-dau" }, { title: "Đông Phương", input: "dong-phuong" }, { title: "Linh Dị", input: "linh-di" }, { title: "Điền Văn", input: "dien-van" }, { title: "Gia Đấu", input: "gia-dau" }, { title: "Trọng Sinh", input: "trong-sinh" }, { title: "Ngược", input: "nguoc" }, { title: "Khác", input: "khac" }, { title: "Võng Du", input: "vong-du" }, { title: "Hệ Thống", input: "he-thong" }, { title: "Xuyên Nhanh", input: "xuyen-nhanh" }, { title: "Nữ Phụ", input: "nu-phu" }, { title: "Hài Hước", input: "hai-huoc" }, { title: "Nữ Cường", input: "nu-cường" }, { title: "Lịch Sử", input: "lich-su" }, { title: "Light Novel", input: "light-novel" }, { title: "Dị Năng", input: "di-nang" }, { title: "Khoa Huyễn", input: "khoa-huyen" }, { title: "Sủng", input: "sung" }, { title: "Mạt Thế", input: "mat-the" }, { title: "Đam Mỹ", input: "dam-my" }, { title: "Đô Thị", input: "do-thi" }, { title: "Sắc", input: "sac" }, { title: "Cổ Đại", input: "co-dai" }, { title: "Dị Giới", input: "di-gioi" }, { title: "Huyền Huyễn", input: "huyen-huyen" }, { title: "Xuyên Không", input: "xuyen-khong" }, { title: "Truyện Teen", input: "truyen-teen" }, { title: "Tiên Hiệp", input: "tien-hiep" }, { title: "Ngôn Tình", input: "ngon-tinh" }, { title: "Tiểu Thuyết", input: "tieu-thuyet" }, { title: "Trinh Thám", input: "trinh-tham" }, { title: "Kiếm Hiệp", input: "kiem-hiep" }], g = 0; g < l.length; g++)
                                                A.push({ title: l[g].title, input: E + "/the-loai/" + l[g].input, script: "gen.js" });
                                            return [2, i.success(A)];
                                        }); });
                                    } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (A) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, page: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(l, g) {
                                        return __awaiter(this, void 0, void 0, function () { var m, N; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    g || (g = {});
                                                    m = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (g.headers)
                                                        for (N in g.headers)
                                                            m[N] = g.headers[N];
                                                    g.headers = m;
                                                    return [4, t(l, g)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T(l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m, N, F, G, W; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l = A(l);
                                                    return [4, D(l)];
                                                case 1:
                                                    g = _a.sent();
                                                    if (!g.ok)
                                                        return [2, i.error("HTTP Error: " + g.status)];
                                                    m = g.html(), N = 1;
                                                    m.select("ul.pagination li a").forEach(function (V) { var Y = V.attr("href") || "", B = Y.match(/trang-(\d+)/i); if (B) {
                                                        var nu = parseInt(B[1], 10);
                                                        nu > N && (N = nu);
                                                    } });
                                                    for (F = [], G = 1; G <= N; G++)
                                                        if (G === 1)
                                                            F.push(l);
                                                        else {
                                                            W = l;
                                                            W.charAt(W.length - 1) !== "/" && (W += "/"), F.push(W + "trang-" + G);
                                                        }
                                                    return [2, i.success(F)];
                                            }
                                        }); });
                                    } function A(l) { return l = String(l || "").replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, E), l.indexOf("//") === 0 && (l = "https:" + l), l = l.replace(/\/trang-\d+\/?(?:#.*)?$/, "/"), l = l.replace(/#.*$/, ""), l.charAt(l.length - 1) !== "/" && (l = l + "/"), l; } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (l) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, detail: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(l, g) {
                                        return __awaiter(this, void 0, void 0, function () { var m, N; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    g || (g = {});
                                                    m = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (g.headers)
                                                        for (N in g.headers)
                                                            m[N] = g.headers[N];
                                                    g.headers = m;
                                                    return [4, t(l, g)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T(l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m, N, F, G, W, V, Y, B, nu, Ju, du, Le, It, Dt, Uu, Ut, Ie, Ot, X0; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l = A(l);
                                                    return [4, D(l)];
                                                case 1:
                                                    g = _a.sent();
                                                    if (!g.ok)
                                                        return [2, i.error("HTTP Error: " + g.status)];
                                                    m = g.html(), N = m.select("h1.story-title").text().trim();
                                                    N || (N = m.select('meta[property="og:title"]').attr("content"));
                                                    F = m.select('meta[property="og:image"]').attr("content");
                                                    F || (F = m.select(".book img").attr("src"));
                                                    G = m.select('.info a[href*="/tac-gia/"]').first(), W = G ? G.text().trim() : "Đang cập nhật", V = G ? G.attr("href") : "";
                                                    V && (V = A(V));
                                                    Y = m.select(".desc-text").html(), B = "Đang ra", nu = m.select(".info .label-success, .info .label-info, .info .label-warning").first();
                                                    nu && (B = nu.text().trim());
                                                    Ju = !0, du = B.toLowerCase();
                                                    du.indexOf("hoàn thành") >= 0 || du.indexOf("đã hoàn") >= 0 || du.indexOf("full") >= 0 ? (Ju = !1, B = "Hoàn thành") : (du.indexOf("đang ra") >= 0 || du.indexOf("đang tiến hành") >= 0) && (B = "Đang ra");
                                                    Le = [], It = [], Dt = "";
                                                    m.select('.info a[itemprop="genre"]').forEach(function (Mt) { var Rt = Mt.text().trim(), Ou = Mt.attr("href"); Ou && (Ou = A(Ou), It.push({ title: Rt, input: Ou, script: "gen.js" }), Le.push(Rt), Dt || (Dt = Ou)); });
                                                    Uu = "";
                                                    Uu += "<p><strong>Tác giả:</strong> " + W + "</p>", Uu += "<p><strong>Trạng thái:</strong> " + B + "</p>";
                                                    Ut = m.select("#totalChapter");
                                                    Ut.size() > 0 && (Uu += "<p><strong>Số chương:</strong> " + Ut.text().trim() + " chương</p>"), Le.length > 0 && (Uu += "<p><strong>Thể loại:</strong> " + Le.join(", ") + "</p>");
                                                    Ie = [];
                                                    V && Ie.push({ title: "Truyện cùng tác giả", input: V, script: "gen.js" });
                                                    Ot = m.select("#truyen-slide .title-list h2 a").first(), X0 = Ot ? Ot.attr("href") : "/danh-sach/truyen-full";
                                                    return [2, (Ie.push({ title: "Đề xuất", input: A(X0), script: "gen.js" }), i.success({ name: N, cover: F, author: W, description: Y, detail: Uu, ongoing: Ju, genres: It, suggests: Ie, host: E }))];
                                            }
                                        }); });
                                    } function A(l) { return l ? (l.indexOf("http") === 0 || l.indexOf("//") === 0 ? (l = String(l).replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, E), l.indexOf("//") === 0 && (l = "https:" + l)) : (l.indexOf("/") !== 0 && (l = "/" + l), l = E + l), l) : ""; } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (l) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, search: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = {});
                                                    g = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (l.headers)
                                                        for (m in l.headers)
                                                            g[m] = l.headers[m];
                                                    l.headers = g;
                                                    return [4, t(A, l)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m, N, F, G, W, V; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = "1");
                                                    g = encodeURIComponent(A).replace(/%20/g, "+");
                                                    l === "1" ? m = E + "/tim-kiem?tukhoa=" + g : m = E + "/tim-kiem/trang-" + l + "?tukhoa=" + g;
                                                    return [4, D(m)];
                                                case 1:
                                                    N = _a.sent();
                                                    if (N.ok) {
                                                        F = N.html(), G = [], W = F.select(".list-truyen .row");
                                                        W.forEach(function (Y) { var B = Y.select(".truyen-title a"); B.size() > 0 && G.push({ name: B.text().trim(), link: B.attr("href"), cover: Y.select("img").attr("src"), description: Y.select(".author").text().trim(), host: E }); });
                                                        V = F.select(".pagination .active + li a").text().trim();
                                                        return [2, i.success(G, V)];
                                                    }
                                                    return [2, i.error("HTTP Error: " + N.status)];
                                            }
                                        }); });
                                    } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (A) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, toc: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = {});
                                                    g = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (l.headers)
                                                        for (m in l.headers)
                                                            g[m] = l.headers[m];
                                                    l.headers = g;
                                                    return [4, t(A, l)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T(A) {
                                        return __awaiter(this, void 0, void 0, function () { var l, g, m, N; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, D(A)];
                                                case 1:
                                                    l = _a.sent();
                                                    if (!l.ok)
                                                        return [2, i.error("HTTP Error: " + l.status)];
                                                    g = l.html(), m = [], N = g.select("#list-chapter .list-chapter li a");
                                                    return [2, (N.size() === 0 && (N = g.select(".list-chapter li a")), N.forEach(function (F) { m.push({ name: F.text().trim(), url: F.attr("href"), host: E }); }), i.success(m))];
                                            }
                                        }); });
                                    } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (A) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, chap: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = {});
                                                    g = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (l.headers)
                                                        for (m in l.headers)
                                                            g[m] = l.headers[m];
                                                    l.headers = g;
                                                    return [4, t(A, l)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T(A) {
                                        return __awaiter(this, void 0, void 0, function () { var l, g, m, N; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, D(A)];
                                                case 1:
                                                    l = _a.sent();
                                                    if (!l.ok)
                                                        return [2, i.error("HTTP Error: " + l.status)];
                                                    g = l.html(), m = g.select(".chapter-content");
                                                    m.select("script, iframe, style, .ads, .quang-cao").remove(), m.select('[style*="display:none"], [style*="display: none"], [style*="font-size:0"], [style*="font-size: 0"], [hidden]').remove();
                                                    N = m.html();
                                                    return [2, (N = N.replace(/[\u200B-\u200D\uFEFF]/g, ""), N = N.replace(/(<br\s*\/?>\s*){3,}/g, "<br><br>"), i.success(N))];
                                            }
                                        }); });
                                    } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (A) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, gen: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, i, n, s, c, o, d, y, h, b, S, w, R, P, Z) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function D(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = {});
                                                    g = { "User-Agent": k, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };
                                                    if (l.headers)
                                                        for (m in l.headers)
                                                            g[m] = l.headers[m];
                                                    l.headers = g;
                                                    return [4, t(A, l)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function T(A, l) {
                                        return __awaiter(this, void 0, void 0, function () { var g, m, N, F, G, W, V, Y, B, nu, Ju; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l || (l = "1");
                                                    g = A.replace(/\/$/, "") + "/trang-" + l + "/";
                                                    return [4, D(g)];
                                                case 1:
                                                    m = _a.sent();
                                                    if (m.ok) {
                                                        for (N = m.html(), F = [], G = N.select(".list-truyen .row[itemscope]"), W = 0; W < G.size(); W++) {
                                                            V = G.get(W), Y = V.select("h3.truyen-title a").attr("href") || "", B = Y.split("/").filter(function (du) { return du; }), nu = B.length ? B[B.length - 1] : "";
                                                            F.push({ name: V.select("h3.truyen-title a").text(), link: nu ? E + "/" + nu : Y, cover: V.select(".col-xs-3 img").attr("src"), description: V.select(".author").text().trim(), host: E });
                                                        }
                                                        Ju = N.select(".pagination li.active + li a").text();
                                                        return [2, i.success(F, Ju)];
                                                    }
                                                    return [2, i.error("HTTP Error: " + m.status)];
                                            }
                                        }); });
                                    } var E, k; return __generator(this, function (_a) {
                                        E = "https://truyenmoiqq.com", k = "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36";
                                        try {
                                            CONFIG_URL && (E = CONFIG_URL), CONFIG_UA && (k = CONFIG_UA);
                                        }
                                        catch (A) { }
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    } };
function Q0(u) { return new qe({ meta: iu, scripts: K0, host: u }); }
var Ca = require("@libs/fetch").fetchApi, Zu = null;
try {
    Zu = require("@libs/storage");
}
catch (u) {
    Zu = null;
}
var kt = {}, ke = Zu && Zu.storage ? Zu.storage : { get: function (u) { return kt[u]; }, set: function (u, e) { kt[u] = e; }, delete: function (u) { delete kt[u]; } }, Lt = (function () {
    function class_2() {
        var _this = this;
        this.id = iu.lnId, this.name = iu.name, this.icon = iu.lnIcon, this.site = iu.source, this.version = iu.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Q0({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, a;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (t.body = e.body);
                            return [4, Ca(e.url, t)];
                        case 1:
                            r = _b.sent(), a = {};
                            try {
                                r.headers.forEach(function (i, n) { a[n] = i; });
                            }
                            catch (i) { }
                            _a = { status: r.status, url: r.url || e.url, headers: a };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (e) { var t = ke.get("vb_" + e); return t == null ? null : String(t); }, storageSet: function (e, t) { t == null ? ke.delete && ke.delete("vb_" + e) : ke.set("vb_" + e, String(t)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(e, t)];
                case 1: return [2, (_a.sent()).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    t = _a.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    r = _a.sent();
                    return [2, { path: e, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (a, i) { return ({ name: a.name, path: a.url, chapterNumber: i + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, t) { return /^https?:/i.test(e) ? e : iu.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), qa = new Lt;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
